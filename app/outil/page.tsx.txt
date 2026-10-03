'use client';

import { useState } from 'react';

type Transaction = {
  date: string;
  label: string;
  amount: number;
};

type Groupe = {
  label: string;
  amount: number;
  count: number;
  annual: number;
};

function parseCSV(text: string): Transaction[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== '');
  if (lines.length < 2) return [];

  const delimiter = lines[0].includes(';') ? ';' : ',';
  const headers = lines[0].split(delimiter).map((h) => h.trim().toLowerCase());

  const dateIdx = headers.findIndex((h) => h.includes('date'));
  const labelIdx = headers.findIndex(
    (h) => h.includes('libell') || h.includes('description') || h.includes('intitul')
  );
  const amountIdx = headers.findIndex(
    (h) => h.includes('montant') || h.includes('debit') || h.includes('débit')
  );

  const transactions: Transaction[] = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(delimiter);
    if (cols.length < headers.length) continue;

    const date = cols[dateIdx]?.trim() ?? '';
    const label = cols[labelIdx]?.trim() ?? '';
    const amountStr = (cols[amountIdx] ?? '').trim().replace(',', '.').replace(/[€\s]/g, '');
    const amount = parseFloat(amountStr);

    if (!label || isNaN(amount) || amount >= 0) continue;
    transactions.push({ date, label, amount: Math.abs(amount) });
  }
  return transactions;
}

function normalizeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[0-9]/g, '')
    .replace(/[^a-zàâäéèêëïîôöùûüç\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 3)
    .join(' ');
}

function detecterAbonnements(transactions: Transaction[]): Groupe[] {
  const groupes: Record<string, { label: string; amount: number; count: number }> = {};

  transactions.forEach((t) => {
    const key = normalizeLabel(t.label) + '_' + Math.round(t.amount);
    if (!groupes[key]) {
      groupes[key] = { label: t.label, amount: t.amount, count: 0 };
    }
    groupes[key].count++;
  });

  return Object.values(groupes)
    .filter((g) => g.count >= 2)
    .map((g) => ({ ...g, annual: g.amount * 12 }))
    .sort((a, b) => b.annual - a.annual);
}

function genererLettre(nom: string): string {
  return `Objet : Résiliation de mon abonnement

Madame, Monsieur,

Je vous informe par la présente de ma décision de résilier l'abonnement souscrit auprès de votre société (${nom}), à compter de la réception de ce courrier.

Je vous remercie de bien vouloir confirmer la prise en compte de cette résiliation et de m'indiquer la date effective de fin de service.

Cordialement,
[Votre nom]`;
}

export default function Outil() {
  const [resultats, setResultats] = useState<Groupe[] | null>(null);
  const [lettreOuverte, setLettreOuverte] = useState<string | null>(null);
  const [erreur, setErreur] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const transactions = parseCSV(text);
      if (transactions.length === 0) {
        setErreur("Le fichier n'a pas pu être lu. Vérifie que c'est bien un export CSV de ta banque.");
        setResultats(null);
        return;
      }
      setErreur(null);
      setResultats(detecterAbonnements(transactions));
    };
    reader.readAsText(file);
  };

  const total = resultats?.reduce((sum, g) => sum + g.annual, 0) ?? 0;

  return (
    <main className="min-h-screen bg-[#14171F] text-[#F5F3ED] px-6 py-12">
      <div className="max-w-md mx-auto">
        <p className="uppercase tracking-widest text-xs text-[#1F7A5C] font-semibold mb-4 text-center">
          Fantômes
        </p>

        {!resultats && (
          <>
            <h1 className="text-3xl font-serif text-center mb-6">
              Dépose ton relevé bancaire
            </h1>
            <p className="text-sm text-[#F5F3ED]/70 text-center mb-8">
              Un fichier CSV exporté depuis ta banque. Rien n'est envoyé sur internet, tout reste sur ton téléphone.
            </p>
            <label className="block w-full bg-[#1F7A5C] text-center py-4 rounded-xl font-semibold cursor-pointer active:scale-[0.98] transition">
              Choisir mon fichier CSV
              <input type="file" accept=".csv" onChange={handleFile} className="hidden" />
            </label>
            {erreur && (
              <p className="mt-4 text-sm text-red-400 text-center">{erreur}</p>
            )}
          </>
        )}

        {resultats && resultats.length === 0 && (
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Aucun fantôme trouvé</h1>
            <p className="text-sm text-[#F5F3ED]/70">
              Ton relevé ne contient pas de prélèvement répété détecté.
            </p>
          </div>
        )}

        {resultats && resultats.length > 0 && (
          <>
            <h1 className="text-2xl font-serif text-center mb-2">
              {resultats.length} fantôme{resultats.length > 1 ? 's' : ''} trouvé{resultats.length > 1 ? 's' : ''}
            </h1>
            <p className="text-center text-[#1F7A5C] font-bold text-3xl mb-8">
              {total.toFixed(0)}€ / an
            </p>

            <div className="space-y-3">
              {resultats.map((g, i) => (
                <div key={i} className="bg-[#1F7A5C]/10 border border-[#1F7A5C]/30 rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{g.label}</p>
                      <p className="text-xs text-[#F5F3ED]/60">
                        {g.amount.toFixed(2)}€ x {g.count} fois repérées
                      </p>
                    </div>
                    <p className="text-[#1F7A5C] font-bold">{g.annual.toFixed(0)}€/an</p>
                  </div>
                  <button
                    onClick={() => setLettreOuverte(lettreOuverte === g.label ? null : g.label)}
                    className="mt-3 text-sm underline text-[#F5F3ED]/80"
                  >
                    {lettreOuverte === g.label ? 'Fermer' : 'Voir la lettre de résiliation'}
                  </button>
                  {lettreOuverte === g.label && (
                    <pre className="mt-3 bg-[#14171F] p-3 rounded-lg text-xs whitespace-pre-wrap">
                      {genererLettre(g.label)}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
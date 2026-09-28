export default function Home() {
  return (
    <main className="min-h-screen bg-[#14171F] text-[#F5F3ED] flex flex-col items-center justify-center px-6 py-12 text-center">
      <p className="uppercase tracking-widest text-xs text-[#1F7A5C] font-semibold mb-4">
        Fantômes
      </p>
      <h1 className="text-4xl sm:text-5xl font-serif leading-tight max-w-md">
        Tu paies des abonnements que tu as oubliés.
      </h1>
      <p className="mt-6 text-lg text-[#F5F3ED]/80 max-w-sm">
        En moyenne, un relevé bancaire cache <span className="text-[#1F7A5C] font-semibold">312€ par an</span> d'abonnements jamais résiliés.
      </p>

      <div className="mt-8 space-y-3 text-left max-w-sm w-full">
        <div className="flex items-start gap-3">
          <span className="text-[#1F7A5C] mt-1">✓</span>
          <p className="text-sm text-[#F5F3ED]/90">Dépose ton relevé, on trouve les prélèvements oubliés</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#1F7A5C] mt-1">✓</span>
          <p className="text-sm text-[#F5F3ED]/90">Une lettre de résiliation prête pour chacun</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-[#1F7A5C] mt-1">✓</span>
          <p className="text-sm text-[#F5F3ED]/90">Ton relevé ne quitte jamais ton téléphone</p>
        </div>
      </div>

      <button className="mt-10 w-full max-w-sm bg-[#1F7A5C] text-[#F5F3ED] font-semibold py-4 rounded-xl text-lg active:scale-[0.98] transition">
        Débusquer mes fantômes — 19€
      </button>

      <p className="mt-4 text-xs text-[#F5F3ED]/50">
        Paiement unique. Résultat en 2 minutes.
      </p>
    </main>
  );
}
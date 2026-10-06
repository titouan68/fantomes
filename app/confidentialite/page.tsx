export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#14171F] text-[#F5F3ED] px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-serif mb-6">Politique de confidentialité</h1>

        <h2 className="text-lg font-semibold mt-6 mb-2">Ton relevé bancaire</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Le fichier que tu déposes est analysé entièrement dans ton navigateur. Il n&apos;est jamais envoyé, transmis ou stocké sur un serveur. Dès que tu fermes ou actualises la page, il est effacé de la mémoire de ton appareil.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Données collectées</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Lors du paiement, Stripe collecte ton adresse email et tes informations bancaires, nécessaires au traitement de la transaction. L&apos;éditeur de ce site n&apos;a pas accès à tes coordonnées bancaires.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Mesure d&apos;audience</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Ce site utilise une mesure d&apos;audience respectueuse de la vie privée, sans cookie de suivi publicitaire, conformément aux recommandations de la CNIL.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Hébergement</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Le site est hébergé par Vercel Inc. (États-Unis), dans le cadre des clauses contractuelles types de la Commission européenne pour les transferts de données hors UE.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Tes droits</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Conformément au RGPD, tu disposes d&apos;un droit d&apos;accès, de rectification et de suppression de tes données. Pour l&apos;exercer, contacte : titoupfiff@gmail.com
        </p>

        <a href="/" className="inline-block mt-8 text-[#1F7A5C] underline">
          Retour à l&apos;accueil
        </a>
      </div>
    </main>
  );
}
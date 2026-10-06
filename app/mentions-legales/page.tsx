export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#14171F] text-[#F5F3ED] px-6 py-12">
      <div className="max-w-2xl mx-auto prose prose-invert">
        <h1 className="text-2xl font-serif mb-6">Mentions légales</h1>

        <h2 className="text-lg font-semibold mt-6 mb-2">Éditeur du site</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Le site Fantômes est édité par :<br />
          [À compléter — Nom et prénom]<br />
          Micro-entrepreneur<br />
          SIRET : [À compléter]<br />
          Adresse : [À compléter]<br />
          Email : titoupfiff@gmail.com
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Directeur de la publication</h2>
        <p className="text-sm text-[#F5F3ED]/80">[À compléter — Nom et prénom]</p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Hébergement</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Le site est hébergé par Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          vercel.com
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Paiement</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          Les paiements sont traités par Stripe Payments Europe, Ltd.
        </p>

        <h2 className="text-lg font-semibold mt-6 mb-2">Propriété intellectuelle</h2>
        <p className="text-sm text-[#F5F3ED]/80">
          L&apos;ensemble des contenus présents sur ce site (textes, visuels, logo) est la propriété exclusive de l&apos;éditeur, sauf mention contraire.
        </p>

        <a href="/" className="inline-block mt-8 text-[#1F7A5C] underline">
          Retour à l&apos;accueil
        </a>
      </div>
    </main>
  );
}
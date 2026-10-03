export default function Merci() {
  return (
    <main className="min-h-screen bg-[#14171F] text-[#F5F3ED] flex flex-col items-center justify-center px-6 py-12 text-center">
      <p className="uppercase tracking-widest text-xs text-[#1F7A5C] font-semibold mb-4">
        Fantômes
      </p>
      <h1 className="text-3xl sm:text-4xl font-serif leading-tight max-w-md">
        Paiement reçu, merci !
      </h1>
      <p className="mt-6 text-lg text-[#F5F3ED]/80 max-w-sm">
        Dépose ton relevé bancaire ci-dessous pour voir tes fantômes.
      </p>

      <a
        href="/outil"
        className="mt-10 w-full max-w-sm bg-[#1F7A5C] text-[#F5F3ED] font-semibold py-4 rounded-xl text-lg active:scale-[0.98] transition inline-block"
      >
        Accéder à mon audit
      </a>
    </main>
  );
}
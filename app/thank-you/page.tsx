export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#F4FBF7] via-white to-[#EEF8F1] px-6">
      <div className="max-w-xl text-center">
        <h1 className="cabinet-extrabold text-5xl text-[#0B2341] mb-6">
          Tack! 🚀
        </h1>

        <p className="cabinet-medium text-lg text-slate-600 leading-relaxed mb-8">
          Du är nu med på väntelistan för FixaNu.
          <br />
          Vi hör av oss när nästa steg är redo.
        </p>

        <a
          href="/"
          className="cabinet-extrabold inline-block rounded-2xl bg-gradient-to-r from-[#0B4F8A] to-[#3ED65C] text-white px-8 py-4 shadow-lg"
        >
          Tillbaka till startsidan
        </a>
      </div>
    </main>
  );
}
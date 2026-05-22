export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F4FBF7] via-[#FFFFFF] to-[#EEF8F1] text-[#0B2341] flex flex-col items-center justify-center px-6 py-8 md:py-0 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-emerald-300/20 blur-3xl pointer-events-none" />
<br />
<br />
<br />
      <div className="relative max-w-5xl w-full text-center z-10 flex flex-col justify-center h-screen">
        <p className="text-sm uppercase tracking-widest text-[#3ED65C] mb-4 font-semibold">
          Kommande tjänst
        </p>

        <h1 className="cabinet-font text-5xl md:text-7xl font-black leading-[1.02] tracking-[-0.02em] [text-shadow:0_1px_1px_rgba(0,0,0,0.08)] mb-6 text-[#0B2341]">
          Få hjälp med vardagssaker 
          <br />
          snabbare och enklare
        </h1>

        <p className="cabinet-medium text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Hjälp med vardagsproblem — direkt från människor i närheten.
        </p>

        <div className="bg-white rounded-[32px] p-8 border border-emerald-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] max-w-2xl mx-auto">
        <h2 className="cabinet-extrabold text-2xl tracking-[-0.02em] mb-4 text-[#0B2341]">
          Få tidig tillgång
        </h2>

          <p className="cabinet-medium text-slate-600 mb-6 leading-relaxed">
            Lämna din mail för att få uppdateringar och möjlighet att testa tjänsten tidigt.
          </p>

          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="cabinet-medium flex-1 rounded-2xl bg-[#F8FAFC] border border-slate-200 px-5 py-4 text-[#0B2341] placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              type="submit"
              className="cabinet-extrabold rounded-2xl bg-gradient-to-r from-[#0B4F8A] to-[#3ED65C] text-white px-8 py-4 tracking-[-0.01em] hover:scale-[1.02] hover:opacity-95 transition duration-300 shadow-lg"
            >
              Få uppdateringar
            </button>
          </form>
        </div>

        <div className="flex justify-center mt-0 opacity-100">
          <img
            src="/logo.png"
            alt="FixaNu"
            className="w-full max-w-xs object-contain"
          />
        </div>
      </div>
    </main>
  );
}

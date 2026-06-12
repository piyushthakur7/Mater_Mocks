"use client";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            How Are We Different? 
          </h2>
          <p className="text-lg text-slate-600">
            Just like any other platform, we also provide FREE mocks, FREE PDFs and PAID mocks. The difference here is that if you perform good in PAID mocks, you can earn cashback rewards .
          </p>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <h4 className="font-bold text-xl mb-3 text-white">Reward Split Distribution Example (Per 100 Students) </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Top 5% of Students </p>
              <p className="text-lg font-black text-green-400">Gets ₹25 Cashback Each </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Next 5% of Students </p>
              <p className="text-lg font-black text-green-400">Gets ₹20 Cashback Each </p>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Following 5% of Students </p>
              <p className="text-lg font-black text-green-400">Gets ₹15 Cashback Each </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

export default function Testimonials() {
  const studentReviews = [
    {
      name: "Rohit Yadav",
      tag: "Preparing for 2 Years  ",
      text: "Performance based rewards!!!!! Wow!!!!. Nice concept team Mastermocks. Till now I have got 10-12 times Rs 25 cashback. I have been preparing for the last 2 years, struggling in mains. Just one request, include MAINS level questions more. Rest, everything is good.  "
    },
    {
      name: "Deepak Meena",
      tag: "Daily Paid Mock User  ",
      text: "Nice bro. First time I am seeing this concept. Loving it. I give daily the paid mock. It is addictive in a positive way especially when you get the cashback. Good concept. Just one suggestion, increases the number of questions is possible.  "
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            What Serious Aspirants Say About Us 
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentReviews.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed font-medium">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 uppercase">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs font-semibold text-brand">{t.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
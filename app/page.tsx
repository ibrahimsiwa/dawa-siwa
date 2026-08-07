import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "نبدأ من أهل سيوة",
    description:
      "نبني قاعدة بيانات منظمة لأبناء الواحة، تبدأ بالمنطقة ثم القبيلة والعائلة والبيت.",
  },
  {
    number: "02",
    title: "نطوّر طريق الدعوة",
    description:
      "نقرّب الدعوة من أهلها بوسيلة رقمية واضحة، مع بقاء معناها الاجتماعي ومكانتها بين الناس.",
  },
  {
    number: "03",
    title: "نصنع مساحة للمستقبل",
    description:
      "نمهد لخدمات قادمة تساعد أصحاب المناسبات على إيصال الدعوات وصياغتها بصورة تليق بكل مناسبة.",
  },
];

const values = [
  "من سيوة وإلى أهلها",
  "يحترم العادات والعرف",
  "واضح لكل الأعمار",
  "يحفظ خصوصية الأعضاء",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative bg-[#315c4c] text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,168,91,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(201,120,61,0.16),transparent_32%)]" />

        <div className="container-page relative">
          <header className="flex flex-col items-center justify-center gap-3 border-b border-white/15 py-5">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="العودة إلى الصفحة الرئيسية"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7a85b] text-xl font-bold text-[#234338]">
                د
              </span>

              <div className="text-right">
                <p className="text-lg font-bold tracking-wide">دعوة</p>
                <p className="text-xs text-white/65">من أهلها إلى أهلها</p>
              </div>
            </Link>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
              siwa 360
            </span>
          </header>

          <div className="mx-auto flex max-w-4xl flex-col items-center py-20 lg:py-28">
            <p className="mb-5 inline-flex rounded-full border border-[#d7a85b]/45 bg-[#d7a85b]/10 px-4 py-2 text-sm text-[#f4dba8]">
              مبادرة رقمية من سيوة
            </p>

            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.35] sm:text-5xl lg:text-6xl">
              الدعوة قيمة بين الناس، و«دعوة» تطوّر الطريق الذي تصل به
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/75 sm:text-xl">
              نبدأ بتنظيم بيانات أبناء سيوة، لنقرّب أهل المناسبة من أهلهم
              وأصدقائهم وجيرانهم، ونمنح الدعوة وسيلة رقمية تواكب اليوم وتحفظ
              مكانتها التي عرفها الناس.
            </p>

            <div className="mt-9 flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl bg-[#d7a85b] px-7 py-4 font-bold text-[#234338] transition hover:bg-[#e5bd7b]"
              >
                انضم إلى دعوة
              </Link>

              <Link
                href="#about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                تعرّف على الفكرة
              </Link>
            </div>

            <p className="mt-5 text-sm text-white/55">
              المرحلة الحالية مخصصة لأبناء سيوة فقط.
            </p>

            <div className="mt-14 w-full max-w-md rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[2rem] bg-[#f8f5ef] p-7 text-[#25342d]">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
                  siwa 360
                </div>

                <div className="mt-7">
                  <p className="text-sm text-[#6c776f]">معنى الدعوة</p>

                  <h2 className="mt-2 text-2xl font-bold text-[#315c4c]">
                    صلة، تقدير، ومشاركة
                  </h2>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="mx-auto h-3 w-28 rounded-full bg-[#d7a85b]/70" />
                  <div className="mx-auto h-3 w-44 rounded-full bg-[#e5dac9]" />
                  <div className="mx-auto h-3 w-36 rounded-full bg-[#e5dac9]" />
                </div>

                <div className="mt-10">
                  <p className="text-xs text-[#6c776f]">رسالتنا</p>
                  <p className="mt-1 font-bold text-[#315c4c]">
                    نطوّر وسيلة الدعوة، ولا نغيّر معناها
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-space bg-[#f8f5ef] text-center">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="font-bold text-[#c9783d]">فكرة دعوة</p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#315c4c] sm:text-4xl">
              من عادة جميلة إلى وسيلة تليق بزماننا
            </h2>

            <p className="mt-5 text-lg leading-9 text-[#6c776f]">
              كل دعوة تحمل معها تقديرًا ومودة ومكانة. لذلك نعمل على أن تكون
              التقنية قريبة من الناس، لا بعيدة عنهم؛ تساعد على ترتيب الوصول إلى
              المدعوين، وتحفظ لأهل المناسبة دورهم، وللدعوة معناها، وللمجتمع
              خصوصيته.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-3xl border border-[#e5dac9] bg-white p-7 shadow-sm"
              >
                <span className="text-4xl font-bold text-[#d7a85b]">
                  {benefit.number}
                </span>

                <h3 className="mt-6 text-xl font-bold text-[#315c4c]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-8 text-[#6c776f]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </div>
        </div>
      </section>

      <section className="section-space bg-[#eadcc6]/45 text-center">
        <div className="container-page">
          <p className="font-bold text-[#c9783d]">ما نحرص عليه</p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#315c4c] sm:text-4xl">
            واضح في الاستخدام، محترم في المعنى
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6c776f]">
            نريد لمنصة دعوة أن تكون سهلة لمن يستخدم الهاتف ببساطة، ومرتبة لمن
            يدير مناسبة كبيرة، وقريبة من روح سيوة وأهلها.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center justify-center gap-3 rounded-2xl border border-[#e5dac9] bg-white/75 p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#315c4c] text-sm font-bold text-white">
                  ✓
                </span>

                <span className="font-semibold text-[#315c4c]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="section-space bg-[#315c4c] text-center text-white">
        <div className="container-page">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
            siwa 360
          </div>

          <p className="mt-6 font-bold text-[#f4dba8]">الخطوة الأولى</p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            كن جزءًا من بداية جديدة للدعوة في سيوة
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            سجّل بياناتك، وشارك في بناء وسيلة منظمة تقرّب الدعوة من أهلها
            وتحافظ على قيمتها.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#d7a85b] px-8 py-4 font-bold text-[#234338] transition hover:bg-[#e5bd7b]"
          >
            ابدأ التسجيل
          </Link>
        </div>
      </section>

      <footer className="bg-[#234338] py-8 text-center text-white">
        <div className="container-page">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
            siwa 360
          </div>

          <p className="mt-4 text-sm text-white/65">
            © {new Date().getFullYear()} دعوة — من أهلها إلى أهلها
          </p>

          <div className="mt-4 flex justify-center gap-5 text-sm text-white/65">
            <Link href="/privacy" className="transition hover:text-white">
              الخصوصية
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
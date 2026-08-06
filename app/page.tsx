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
    title: "نطوّر طريقة التبليغ",
    description:
      "نستخدم التقنية لتسهيل إيصال الدعوات، مع الحفاظ على مكانة الأهل والعرف وروح المناسبة.",
  },
  {
    number: "03",
    title: "نفتح باب المستقبل",
    description:
      "نمهّد لاحقًا لخدمات رقمية تشمل إيصال الدعوات وتصميمها بطريقة تليق بكل مناسبة.",
  },
];

const values = [
  "احترام العادات والعرف السيوي",
  "تنظيم الدعوة دون إلغاء دور الأهل",
  "حماية بيانات أبناء الواحة",
  "بساطة تصلح لكل الأعمار",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="relative bg-[#315c4c] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(215,168,91,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(201,120,61,0.16),transparent_32%)]" />

        <div className="container-page relative">
          <header className="flex items-center justify-between border-b border-white/15 py-5">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="العودة إلى الصفحة الرئيسية"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7a85b] text-xl font-bold text-[#234338]">
                د
              </span>

              <div>
                <p className="text-lg font-bold tracking-wide">دعوة</p>
                <p className="text-xs text-white/65">من أهلها إلى أهلها</p>
              </div>
            </Link>

            <Link
              href="#join"
              className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#315c4c]"
            >
              انضم الآن
            </Link>
          </header>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div className="max-w-2xl">
              <p className="mb-5 inline-flex rounded-full border border-[#d7a85b]/45 bg-[#d7a85b]/10 px-4 py-2 text-sm text-[#f4dba8]">
                مبادرة رقمية من سيوة
              </p>

              <h1 className="text-balance text-4xl font-bold leading-[1.3] sm:text-5xl lg:text-6xl">
                دعوة من أهلها، تصل إلى أهلها
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-9 text-white/75 sm:text-xl">
                في سيوة، الدعوة ليست ورقة فقط؛ إنها صلة بين أهل المناسبة
                وأهلهم وأصدقائهم وجيرانهم. جاءت دعوة لتطوّر طريقة التبليغ بما
                يناسب زمننا، دون أن تفقد الدعوة معناها أو مكانتها.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[3rem] border border-[#d7a85b]/20" />
              <div className="absolute -inset-10 rounded-[4rem] border border-white/10" />

              <div className="relative rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
                <div className="rounded-[2rem] bg-[#f8f5ef] p-7 text-[#25342d]">
                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <p className="text-sm text-[#6c776f]">معنى الدعوة</p>
                      <h2 className="mt-2 text-2xl font-bold text-[#315c4c]">
                        صلة ومكانة
                      </h2>
                    </div>

                    <span className="rounded-full bg-[#eadcc6] px-3 py-1 text-xs font-bold text-[#315c4c]">
                      سيوة
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="h-3 w-28 rounded-full bg-[#d7a85b]/70" />
                    <div className="h-3 w-44 rounded-full bg-[#e5dac9]" />
                    <div className="h-3 w-36 rounded-full bg-[#e5dac9]" />
                  </div>

                  <div className="mt-12 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-[#6c776f]">رسالتنا</p>
                      <p className="mt-1 font-bold text-[#315c4c]">
                        التقنية في خدمة الدعوة
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#315c4c] text-2xl font-bold text-[#d7a85b]">
                      د
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-space bg-[#f8f5ef]">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="font-bold text-[#c9783d]">فكرة دعوة</p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#315c4c] sm:text-4xl">
              نحفظ قيمة الدعوة، ونطوّر وسيلة إيصالها
            </h2>

            <p className="mt-5 text-lg leading-9 text-[#6c776f]">
              في كل مناسبة، تحمل الدعوة معنى يتجاوز الورق أو الرسالة؛ فهي
              تقدير وصلة ومشاركة. لذلك لا تأتي دعوة لتلغي طرق التبليغ المعروفة
              بين أهلنا، بل لتساعد على تنظيمها وتطويرها بما يناسب زمننا، ويحفظ
              خصوصية المجتمع وكرامة المناسبة.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
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
        </div>
      </section>

      <section className="section-space bg-[#eadcc6]/45">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold text-[#c9783d]">فلسفة التصميم</p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#315c4c] sm:text-4xl">
              بسيط في الاستخدام، عميق في المعنى
            </h2>

            <p className="mt-5 leading-8 text-[#6c776f]">
              نصمم دعوة لتكون واضحة لمن لا يعرف الكثير عن الهاتف، وراقية بما
              يكفي لتخدم أصحاب المناسبات، وهادئة بما يليق بحكمة أهل الواحة.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-2xl border border-[#e5dac9] bg-white/75 p-5"
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

      <section id="join" className="section-space bg-[#315c4c] text-white">
        <div className="container-page text-center">
          <p className="font-bold text-[#f4dba8]">الخطوة الأولى</p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
            كن جزءًا من منظومة دعوة في سيوة
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/70">
            سجّل بياناتك الآن، وشارك في بناء طريقة أكثر تنظيمًا للتبليغ عن
            المناسبات، مع الحفاظ على قيمة الدعوة وروحها.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[#d7a85b] px-8 py-4 font-bold text-[#234338] transition hover:bg-[#e5bd7b]"
          >
            ابدأ التسجيل
          </Link>
        </div>
      </section>

      <footer className="bg-[#234338] py-8 text-white">
        <div className="container-page flex flex-col gap-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} دعوة — من أهلها إلى أهلها</p>

          <div className="flex gap-5">
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
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#25342d]">
      <header className="border-b border-[#e5dac9] bg-white/80">
        <div className="container-page flex items-center justify-between gap-4 py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315c4c] text-xl font-bold text-[#d7a85b]">
              د
            </span>

            <div>
              <p className="font-bold text-[#315c4c]">دعوة</p>
              <p className="text-xs text-[#6c776f]">من أهلها إلى أهلها</p>
            </div>
          </Link>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </span>
        </div>
      </header>

      <section className="container-page py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold text-[#c9783d]">دعوة — من أهلها إلى أهلها</p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.4] text-[#315c4c] sm:text-6xl">
            لكل مناسبة دعوة، ولكل دعوة طريق يصل بها إلى أهلها
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[#6c776f] sm:text-xl">
            نطوّر طريقة التبليغ عن المناسبات المباحة والمعتمدة في سيوة، من
            الأفراح والعقيقة إلى النجاح وتعييدة العيدين، ونقرّب الدعوة من
            أهلها بوسيلة منظمة تحفظ معناها وتراعي قيم المجتمع.
          </p>

          <Link
            href="/register"
            className="mt-9 inline-flex rounded-2xl bg-[#315c4c] px-8 py-4 font-bold text-white transition hover:bg-[#234338]"
          >
            التسجيل في دعوة
          </Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#e5dac9] bg-white p-7 text-center shadow-sm sm:p-10">
          <p className="font-bold text-[#c9783d]">فكرة دعوة</p>

          <h2 className="mt-3 text-3xl font-bold text-[#315c4c]">
            نقرّب الدعوة من أهلها، ونحفظ معناها
          </h2>

          <p className="mt-5 text-lg leading-9 text-[#6c776f]">
            الدعوة في مجتمعنا ليست مجرد إخبار بموعد؛ إنها صلة ومشاركة وتقدير.
            ومن هنا جاءت «دعوة» لتساعد أهل المناسبة على الوصول إلى أهلهم بطريقة
            أوضح وأكثر ترتيبًا، مع احترام الدين والقانون والعرف السيوي.
          </p>
        </div>
      </section>

      <footer className="bg-[#234338] py-8 text-center text-white">
        <div className="container-page">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
            siwa 360
          </p>

          <p className="mt-4 text-sm text-white/65">
            © {new Date().getFullYear()} دعوة — من أهلها إلى أهلها
          </p>

          <div className="mt-4 flex items-center justify-center gap-5 text-sm text-white/65">
            <Link href="/privacy" className="transition hover:text-white">
              الخصوصية
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              الشروط والأحكام
            </Link>

            <Link
              href="/staff/login"
              aria-label="دخول الإدارة"
              title="دخول الإدارة"
              className="text-white/35 transition hover:text-[#f4dba8]"
            >
              ◉
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
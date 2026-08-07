import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] px-4 py-10 text-center">
      <section className="w-full max-w-xl rounded-[2rem] border border-[#e5dac9] bg-white p-8 shadow-sm sm:p-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
          siwa 360
        </p>

        <div className="mt-8 text-7xl font-bold text-[#d7a85b]">404</div>

        <h1 className="mt-5 text-3xl font-bold text-[#315c4c]">
          هذه الصفحة ليست هنا
        </h1>

        <p className="mt-4 leading-8 text-[#6c776f]">
          ربما تغيّر الرابط، أو أن الصفحة لم تُفتح بعد. يمكنك العودة إلى
          الصفحة الرئيسية ومتابعة رحلتك مع دعوة.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[#315c4c] px-7 py-4 font-bold text-white transition hover:bg-[#234338]"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </section>
    </main>
  );
}

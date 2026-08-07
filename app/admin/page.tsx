import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <header className="border-b border-[#e5dac9] bg-white/80">
        <div className="container-page flex flex-col items-center justify-center gap-3 py-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </span>

          <h1 className="text-3xl font-bold text-[#315c4c]">
            لوحة إدارة دعوة
          </h1>

          <p className="text-sm text-[#6c776f]">
            مساحة مخصصة للمراجعة والتنظيم، وليست متاحة للعامة.
          </p>
        </div>
      </header>

      <div className="container-page py-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 rounded-3xl border border-[#e5dac9] bg-white p-6 text-center shadow-sm">
            <p className="font-bold text-[#c9783d]">المرحلة الثانية</p>

            <h2 className="mt-2 text-2xl font-bold text-[#315c4c]">
              إدارة بيانات الأعضاء
            </h2>

            <p className="mt-3 leading-8 text-[#6c776f]">
              ستظهر هنا لاحقًا بيانات الأعضاء، وتقسيماتهم حسب المناطق والقبائل
              والعائلات والبيوت، مع أدوات المراجعة والتوثيق.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["0", "إجمالي الأعضاء"],
              ["0", "طلبات المراجعة"],
              ["0", "المناطق"],
              ["0", "بيانات تحتاج تحديثًا"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#e5dac9] bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-[#315c4c]">{number}</p>
                <p className="mt-2 text-sm text-[#6c776f]">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#e5dac9] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-[#315c4c]">
              أدوات الإدارة القادمة
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "البحث بالاسم أو الهاتف",
                "التصفية حسب المنطقة",
                "التصفية حسب القبيلة والعائلة",
                "مراجعة صور البطاقات",
                "اعتماد أو رفض البيانات",
                "سجل التعديلات الإدارية",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#f8f5ef] p-4 text-sm font-semibold text-[#315c4c]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-[#315c4c] px-6 py-3 font-bold text-white transition hover:bg-[#234338]"
            >
              العودة إلى الموقع
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-[#234338] py-7 text-center text-sm text-white/65">
        <div className="container-page">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
            siwa 360
          </p>

          <p className="mt-3">لوحة إدارة دعوة</p>
        </div>
      </footer>
    </main>
  );
}

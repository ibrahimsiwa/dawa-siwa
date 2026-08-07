import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description:
    "الشروط والأحكام الخاصة باستخدام منصة دعوة التابعة لمشروع siwa 360.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <header className="border-b border-[#e5dac9] bg-white/80">
        <div className="container-page flex flex-col items-center justify-center gap-3 py-6 text-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315c4c] text-xl font-bold text-[#d7a85b]">
              د
            </span>

            <div className="text-right">
              <p className="font-bold text-[#315c4c]">دعوة</p>
              <p className="text-xs text-[#6c776f]">من أهلها إلى أهلها</p>
            </div>
          </Link>

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#806477]">
            siwa 360
          </span>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <article className="mx-auto max-w-3xl rounded-[2rem] border border-[#e5dac9] bg-white p-6 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#806477]">
              siwa 360
            </p>

            <p className="mt-5 font-bold text-[#c9783d]">الاستخدام المسؤول</p>

            <h1 className="mt-3 text-3xl font-bold text-[#315c4c] sm:text-4xl">
              الشروط والأحكام
            </h1>

            <p className="mt-4 leading-8 text-[#6c776f]">
              تهدف هذه الشروط إلى توضيح طريقة استخدام منصة دعوة وحدود
              المسؤوليات في المرحلة الحالية والمراحل القادمة.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[#25342d]">
            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                1. طبيعة منصة دعوة
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                دعوة منصة رقمية تابعة لمشروع siwa 360، وتهدف إلى تطوير طريقة
                التبليغ عن مختلف المناسبات، مع احترام العادات والعرف وقيمة
                التواصل بين أهل المناسبة والمدعوين.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                2. المناسبات التي تشملها المنصة
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                لا تقتصر فكرة دعوة على الأفراح؛ فقد تشمل مستقبلًا العقيقة،
                والنجاح والتخرج، وأعياد الميلاد، والمناسبات العائلية، والمناسبات
                الاجتماعية، وأي مناسبة يقرر النظام دعمها.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                3. دقة البيانات
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                يلتزم المستخدم بإدخال بيانات صحيحة تخصه أو يملك الإذن باستخدامها.
                ويحق للإدارة طلب التوضيح أو تعديل الحالة أو رفض الطلب عند وجود
                بيانات ناقصة أو متعارضة أو غير موثوقة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                4. التوثيق
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                علامة «موثّق لدى دعوة» هي علامة داخلية تعني أن الإدارة راجعت
                البيانات وفق إجراءاتها، ولا تعني توثيقًا حكوميًا أو ضمانًا
                قانونيًا أو اجتماعيًا خارج المنصة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                5. استخدام الدعوات
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                لا تضمن المنصة في مراحلها الأولى وصول كل دعوة في كل ظرف. تعمل
                دعوة على تنظيم المعلومات وتوفير وسائل مساعدة، بينما تظل
                مسؤولية صحة المناسبة وبياناتها ومحتواها على صاحبها أو الجهة
                التي أرسلتها.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                6. احترام المجتمع
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                يمنع استخدام المنصة للإساءة أو انتحال شخصية الآخرين أو نشر
                محتوى يخالف القيم العامة أو يستغل بيانات الأعضاء أو يسبب
                إزعاجًا متكررًا للمدعوين.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                7. الخدمات المستقبلية
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                قد تشمل مراحل لاحقة إنشاء وتصميم الدعوات، وقوالب وإطارات متعددة،
                وخدمات مميزة بمستويات مختلفة. ولا تعتبر هذه الخدمات متاحة أو
                مضمونة في المرحلة الحالية إلا إذا أعلنت المنصة ذلك صراحة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                8. تحديث الشروط
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                قد تتغير هذه الشروط عند توسع المشروع أو إضافة خدمة جديدة. تظهر
                النسخة الأحدث داخل المنصة، ويعد استمرار الاستخدام بعد الإعلان
                عن التعديل قبولًا للشروط المحدثة ضمن الحدود النظامية المعمول
                بها.
              </p>
            </section>
          </div>

          <div className="mt-10 border-t border-[#eee7db] pt-6 text-center">
            <Link
              href="/register"
              className="inline-flex rounded-2xl bg-[#315c4c] px-6 py-3 font-bold text-white transition hover:bg-[#234338]"
            >
              العودة إلى التسجيل
            </Link>
          </div>
        </article>
      </div>

      <footer className="bg-[#234338] py-7 text-center text-sm text-white/65">
        <div className="container-page">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f4dba8]">
            siwa 360
          </p>

          <p className="mt-3">دعوة — من أهلها إلى أهلها</p>
        </div>
      </footer>
    </main>
  );
      }

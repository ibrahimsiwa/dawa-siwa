import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description:
    "سياسة الخصوصية لمنصة دعوة التابعة لمشروع siwa 360.",
};

export default function PrivacyPage() {
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

            <p className="mt-5 font-bold text-[#c9783d]">الخصوصية والثقة</p>

            <h1 className="mt-3 text-3xl font-bold text-[#315c4c] sm:text-4xl">
              سياسة الخصوصية
            </h1>

            <p className="mt-4 leading-8 text-[#6c776f]">
              نوضح هنا كيف تتعامل منصة دعوة مع البيانات التي يشاركها أبناء
              سيوة عند التسجيل.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-[#25342d]">
            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                1. ما الغرض من جمع البيانات؟
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                تجمع دعوة البيانات الأساسية بهدف بناء قاعدة منظمة لأبناء سيوة،
                ثم استخدامها مستقبلًا في تنظيم وإيصال الدعوات الخاصة بمختلف
                المناسبات، مثل الأفراح والعقيقة والنجاح والتخرج والمناسبات
                العائلية والاجتماعية.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                2. ما البيانات التي قد نطلبها؟
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                قد نطلب الاسم الكامل، ورقم الهاتف، والمنطقة، والقبيلة، والعائلة،
                والبيت، إضافة إلى صورة الوجه وصورة الخلف للبطاقة عند اختيار
                التوثيق الاختياري.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                3. هل تظهر البيانات للآخرين؟
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                لا تظهر بيانات الأعضاء الشخصية للعامة أو لأصحاب المناسبات
                بشكل مباشر. وتستخدم البيانات داخل المنصة وفق الصلاحيات والغرض
                المعلن، مع السعي إلى حماية أرقام الهواتف والصور والمعلومات
                الحساسة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                4. صور البطاقة
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                رفع صور البطاقة اختياري، والغرض منه مساعدة الإدارة في مراجعة
                البيانات عند الحاجة. رفع الصور لا يعني التوثيق التلقائي، ولا
                يجوز استخدامها خارج الغرض الموضح في المنصة.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                5. استقبال الدعوات
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                التسجيل في دعوة يعني الانضمام إلى منظومة استقبال الدعوات عند
                تشغيل خدماتها. وستكون الدعوات مرتبطة بالمناسبات المختلفة، وليس
                بالأفراح فقط.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                6. طلب التعديل أو الحذف
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                يمكن لصاحب البيانات التواصل مع إدارة المنصة لطلب تعديل بياناته
                أو الاستفسار عن طريقة استخدامها أو طلب حذفها، وفق الإمكانات
                والإجراءات المعتمدة عند تشغيل النظام الكامل.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                7. تحديث السياسة
              </h2>

              <p className="mt-3 leading-8 text-[#6c776f]">
                قد تتغير هذه السياسة عند إضافة خدمات جديدة أو تطوير مراحل
                المنصة. سنوضح أي تغييرات مهمة داخل المنصة قبل تطبيقها على
                الخدمات ذات الصلة.
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

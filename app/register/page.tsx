"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { siwaRegions } from "@/lib/data/taxonomy";

type FormData = {
  fullName: string;
  phone: string;
  confirmPhone: string;
  regionId: string;
  tribeId: string;
  familyId: string;
  houseId: string;
  suggestedHouseName: string;
  suggestedHouseNote: string;
  idCardFile: File | null;
  privacyConsent: boolean;
  contactConsent: boolean;
};

const initialFormData: FormData = {
  fullName: "",
  phone: "",
  confirmPhone: "",
  regionId: "",
  tribeId: "",
  familyId: "",
  houseId: "",
  suggestedHouseName: "",
  suggestedHouseNote: "",
  idCardFile: null,
  privacyConsent: false,
  contactConsent: false,
};

const inputClassName =
  "w-full rounded-2xl border border-[#e5dac9] bg-[#fdfcf9] px-4 py-3 outline-none transition placeholder:text-[#9ba39d] focus:border-[#315c4c] focus:ring-4 focus:ring-[#315c4c]/10 disabled:cursor-not-allowed disabled:opacity-50";

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showSuggestedHouse, setShowSuggestedHouse] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedRegion = useMemo(
    () =>
      siwaRegions.find((region) => region.id === formData.regionId) ?? null,
    [formData.regionId],
  );

  const availableTribes = selectedRegion?.tribes ?? [];

  const selectedTribe = useMemo(
    () =>
      availableTribes.find((tribe) => tribe.id === formData.tribeId) ?? null,
    [availableTribes, formData.tribeId],
  );

  const availableFamilies = selectedTribe?.families ?? [];

  const selectedFamily = useMemo(
    () =>
      availableFamilies.find(
        (family) => family.id === formData.familyId,
      ) ?? null,
    [availableFamilies, formData.familyId],
  );

  const availableHouses = selectedFamily?.houses ?? [];

  function updateField<Key extends keyof FormData>(
    field: Key,
    value: FormData[Key],
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  }

  function handleRegionChange(event: ChangeEvent<HTMLSelectElement>) {
    const regionId = event.target.value;

    setFormData((current) => ({
      ...current,
      regionId,
      tribeId: "",
      familyId: "",
      houseId: "",
    }));

    setErrors((current) => ({
      ...current,
      regionId: "",
      tribeId: "",
      familyId: "",
      houseId: "",
    }));
  }

  function handleTribeChange(event: ChangeEvent<HTMLSelectElement>) {
    const tribeId = event.target.value;

    setFormData((current) => ({
      ...current,
      tribeId,
      familyId: "",
      houseId: "",
    }));

    setErrors((current) => ({
      ...current,
      tribeId: "",
      familyId: "",
      houseId: "",
    }));
  }

  function handleFamilyChange(event: ChangeEvent<HTMLSelectElement>) {
    const familyId = event.target.value;

    setFormData((current) => ({
      ...current,
      familyId,
      houseId: "",
    }));

    setErrors((current) => ({
      ...current,
      familyId: "",
      houseId: "",
    }));
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      updateField("idCardFile", null);
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSizeInBytes = 5 * 1024 * 1024;

    if (!allowedTypes.includes(file.type)) {
      setErrors((current) => ({
        ...current,
        idCardFile: "يرجى اختيار صورة بصيغة JPG أو PNG أو WEBP.",
      }));
      event.target.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      setErrors((current) => ({
        ...current,
        idCardFile: "حجم الصورة يجب ألا يتجاوز 5 ميجابايت.",
      }));
      event.target.value = "";
      return;
    }

    updateField("idCardFile", file);
  }

  function validateForm() {
    const nextErrors: Record<string, string> = {};

    if (formData.fullName.trim().length < 4) {
      nextErrors.fullName = "اكتب الاسم الكامل بشكل صحيح.";
    }

    if (!/^01[0-2,5][0-9]{8}$/.test(formData.phone)) {
      nextErrors.phone = "اكتب رقم هاتف مصري صحيحًا مكوّنًا من 11 رقمًا.";
    }

    if (formData.confirmPhone !== formData.phone) {
      nextErrors.confirmPhone = "رقم الهاتف غير متطابق.";
    }

    if (!formData.regionId) {
      nextErrors.regionId = "اختر المنطقة.";
    }

    if (!formData.tribeId) {
      nextErrors.tribeId = "اختر القبيلة.";
    }

    if (!formData.familyId) {
      nextErrors.familyId = "اختر العائلة.";
    }

    if (!showSuggestedHouse && !formData.houseId) {
      nextErrors.houseId = "اختر البيت أو فعّل خيار اقتراح بيت جديد.";
    }

    if (showSuggestedHouse && formData.suggestedHouseName.trim().length < 2) {
      nextErrors.suggestedHouseName = "اكتب اسم البيت المقترح.";
    }

    if (!formData.privacyConsent) {
      nextErrors.privacyConsent =
        "يجب الموافقة على سياسة الخصوصية للمتابعة.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-4 py-10">
        <div className="mx-auto flex min-h-[80vh] max-w-xl items-center justify-center">
          <section className="w-full rounded-[2rem] border border-[#e5dac9] bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf2ed] text-3xl text-[#315c4c]">
              ✓
            </div>

            <p className="mt-6 font-bold text-[#b17a2d]">تم استلام البيانات</p>

            <h1 className="mt-3 text-3xl font-bold text-[#315c4c]">
              شكرًا لانضمامك إلى دعوة
            </h1>

            <p className="mt-5 leading-8 text-[#6c776f]">
              وصلت بياناتك بنجاح، وأصبحت الآن قيد المراجعة من إدارة دعوة.
              التسجيل يعني انضمامك إلى منظومة استقبال الدعوات، وسيتم استخدام
              بياناتك لهذا الغرض وفق سياسة الخصوصية.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#6c776f]">
              ملاحظة: هذه نسخة تجريبية، وسيتم ربط البيانات بقاعدة البيانات
              الفعلية في الخطوة القادمة.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-2xl bg-[#315c4c] px-7 py-4 font-bold text-white transition hover:bg-[#234338]"
            >
              العودة إلى الصفحة الرئيسية
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">
      <header className="border-b border-[#e5dac9] bg-white/80">
        <div className="container-page flex items-center justify-between py-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#315c4c] text-xl font-bold text-[#d7a85b]">
              د
            </span>

            <div>
              <p className="font-bold text-[#315c4c]">دعوة</p>
              <p className="text-xs text-[#6c776f]">من سيوة إلى أهلها</p>
            </div>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-[#315c4c] hover:text-[#b17a2d]"
          >
            الرئيسية
          </Link>
        </div>
      </header>

      <div className="container-page py-10 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="font-bold text-[#b17a2d]">الخطوة الأولى</p>

            <h1 className="mt-3 text-3xl font-bold text-[#315c4c] sm:text-4xl">
              انضم إلى منظومة دعوة
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6c776f]">
              نحن نطوّر طريقة التبليغ عن الأفراح والمناسبات في سيوة، ونحافظ
              على قيمة الدعوة ومكانتها بين الأهل والأصدقاء والجيران.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[#e5dac9] bg-white p-5 shadow-sm sm:p-8"
          >
            <div className="mb-8 rounded-2xl bg-[#eaf2ed] p-5 text-[#315c4c]">
              <p className="font-bold">قبل التسجيل</p>
              <p className="mt-2 text-sm leading-7">
                التسجيل في المرحلة الحالية مخصص لأبناء سيوة. إدخال بياناتك
                يعني انضمامك إلى منظومة استقبال الدعوات عند تشغيل خدماتها،
                وستتعامل دعوة مع البيانات وفق سياسة الخصوصية.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-[#315c4c]">
                البيانات الأساسية
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    الاسم الكامل
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    placeholder="اكتب اسمك الكامل"
                    className={inputClassName}
                  />

                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    رقم الهاتف
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="01xxxxxxxxx"
                    className={`${inputClassName} text-right`}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPhone"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    تأكيد رقم الهاتف
                  </label>

                  <input
                    id="confirmPhone"
                    type="tel"
                    inputMode="numeric"
                    dir="ltr"
                    value={formData.confirmPhone}
                    onChange={(event) =>
                      updateField("confirmPhone", event.target.value)
                    }
                    placeholder="أعد كتابة الرقم"
                    className={`${inputClassName} text-right`}
                  />

                  {errors.confirmPhone && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.confirmPhone}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="mt-10 border-t border-[#eee7db] pt-8">
              <h2 className="text-xl font-bold text-[#315c4c]">
                مكان الإقامة والتصنيف
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6c776f]">
                اختر المنطقة أولًا، ثم القبيلة والعائلة والبيت. هذا الترتيب
                يساعد مستقبلًا على تنظيم كشوف الدعوات حسب المناطق.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="region"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    المنطقة
                  </label>

                  <select
                    id="region"
                    value={formData.regionId}
                    onChange={handleRegionChange}
                    className={inputClassName}
                  >
                    <option value="">اختر المنطقة</option>

                    {siwaRegions.map((region) => (
                      <option key={region.id} value={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </select>

                  {errors.regionId && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.regionId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="tribe"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    القبيلة
                  </label>

                  <select
                    id="tribe"
                    value={formData.tribeId}
                    onChange={handleTribeChange}
                    disabled={!formData.regionId}
                    className={inputClassName}
                  >
                    <option value="">
                      {formData.regionId ? "اختر القبيلة" : "اختر المنطقة أولًا"}
                    </option>

                    {availableTribes.map((tribe) => (
                      <option key={tribe.id} value={tribe.id}>
                        {tribe.name}
                      </option>
                    ))}
                  </select>

                  {errors.tribeId && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.tribeId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="family"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    العائلة
                  </label>

                  <select
                    id="family"
                    value={formData.familyId}
                    onChange={handleFamilyChange}
                    disabled={!formData.tribeId}
                    className={inputClassName}
                  >
                    <option value="">
                      {formData.tribeId
                        ? "اختر العائلة"
                        : "اختر القبيلة أولًا"}
                    </option>

                    {availableFamilies.map((family) => (
                      <option key={family.id} value={family.id}>
                        {family.name}
                      </option>
                    ))}
                  </select>

                  {errors.familyId && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.familyId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="house"
                    className="mb-2 block text-sm font-bold text-[#315c4c]"
                  >
                    البيت
                  </label>

                  <select
                    id="house"
                    value={formData.houseId}
                    onChange={(event) =>
                      updateField("houseId", event.target.value)
                    }
                    disabled={!formData.familyId || showSuggestedHouse}
                    className={inputClassName}
                  >
                    <option value="">
                      {formData.familyId ? "اختر البيت" : "اختر العائلة أولًا"}
                    </option>

                    {availableHouses.map((house) => (
                      <option key={house.id} value={house.id}>
                        {house.name}
                      </option>
                    ))}
                  </select>

                  {errors.houseId && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.houseId}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#e5dac9] bg-[#fdfcf9] p-4">
                    <input
                      type="checkbox"
                      checked={showSuggestedHouse}
                      onChange={(event) => {
                        const checked = event.target.checked;

                        setShowSuggestedHouse(checked);

                        if (checked) {
                          updateField("houseId", "");
                        } else {
                          updateField("suggestedHouseName", "");
                          updateField("suggestedHouseNote", "");
                        }

                        setErrors((current) => ({
                          ...current,
                          houseId: "",
                          suggestedHouseName: "",
                        }));
                      }}
                      className="mt-1 h-4 w-4 accent-[#315c4c]"
                    />

                    <span>
                      <span className="block font-bold text-[#315c4c]">
                        لا أجد اسم البيت الخاص بي
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#6c776f]">
                        يمكنك اقتراح اسم بيت جديد، وستراجعه الإدارة قبل
                        اعتماده.
                      </span>
                    </span>
                  </label>
                </div>

                {showSuggestedHouse && (
                  <>
                    <div>
                      <label
                        htmlFor="suggestedHouseName"
                        className="mb-2 block text-sm font-bold text-[#315c4c]"
                      >
                        اسم البيت المقترح
                      </label>

                      <input
                        id="suggestedHouseName"
                        type="text"
                        value={formData.suggestedHouseName}
                        onChange={(event) =>
                          updateField(
                            "suggestedHouseName",
                            event.target.value,
                          )
                        }
                        placeholder="اكتب اسم البيت"
                        className={inputClassName}
                      />

                      {errors.suggestedHouseName && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.suggestedHouseName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="suggestedHouseNote"
                        className="mb-2 block text-sm font-bold text-[#315c4c]"
                      >
                        ملاحظة إضافية، إن وجدت
                      </label>

                      <input
                        id="suggestedHouseNote"
                        type="text"
                        value={formData.suggestedHouseNote}
                        onChange={(event) =>
                          updateField(
                            "suggestedHouseNote",
                            event.target.value,
                          )
                        }
                        placeholder="معلومة تساعد الإدارة"
                        className={inputClassName}
                      />
                    </div>
                  </>
                )}
              </div>
            </section>

            <section className="mt-10 border-t border-[#eee7db] pt-8">
              <h2 className="text-xl font-bold text-[#315c4c]">
                التوثيق الاختياري
              </h2>

              <p className="mt-2 text-sm leading-7 text-[#6c776f]">
                يمكنك رفع صورة البطاقة لمساعدة الإدارة في مراجعة بياناتك. لا
                تظهر الصورة للعامة، ولا تمنح علامة «موثّق لدى دعوة» تلقائيًا.
              </p>

              <label
                htmlFor="idCard"
                className="mt-5 block cursor-pointer rounded-2xl border-2 border-dashed border-[#d7c7ae] bg-[#fdfcf9] p-6 text-center transition hover:border-[#315c4c]"
              >
                <span className="block font-bold text-[#315c4c]">
                  اختر صورة البطاقة
                </span>

                <span className="mt-2 block text-sm text-[#6c776f]">
                  JPG أو PNG أو WEBP — الحد الأقصى 5 ميجابايت
                </span>

                <input
                  id="idCard"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileChange}
                  className="sr-only"
                />

                {formData.idCardFile && (
                  <span className="mt-3 block text-sm font-semibold text-[#c9783d]">
                    تم اختيار: {formData.idCardFile.name}
                  </span>
                )}
              </label>

              {errors.idCardFile && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.idCardFile}
                </p>
              )}
            </section>

            <section className="mt-10 border-t border-[#eee7db] pt-8">
              <h2 className="text-xl font-bold text-[#315c4c]">
                الموافقة على استخدام البيانات
              </h2>

              <div className="mt-5 space-y-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(event) =>
                      updateField("privacyConsent", event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#315c4c]"
                  />

                  <span className="text-sm leading-7 text-[#6c776f]">
                    أوافق على{" "}
                    <Link
                      href="/privacy"
                      className="font-bold text-[#315c4c] underline"
                    >
                      سياسة الخصوصية
                    </Link>{" "}
                    واستخدام بياناتي لتشغيل منصة دعوة وتنظيم بيانات الأعضاء
                    وإيصال الدعوات المتعلقة بالمناسبات.
                  </span>
                </label>

                {errors.privacyConsent && (
                  <p className="text-sm text-red-600">
                    {errors.privacyConsent}
                  </p>
                )}

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={formData.contactConsent}
                    onChange={(event) =>
                      updateField("contactConsent", event.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-[#315c4c]"
                  />

                  <span className="text-sm leading-7 text-[#6c776f]">
                    أوافق اختياريًا على التواصل معي عند الحاجة لمراجعة بياناتي
                    أو إبلاغي بتحديثات مهمة تخص المنصة.
                  </span>
                </label>
              </div>
            </section>

            <button
              type="submit"
              className="mt-10 w-full rounded-2xl bg-[#315c4c] px-6 py-4 font-bold text-white transition hover:bg-[#234338]"
            >
              إرسال بيانات الانضمام
            </button>

            <p className="mt-4 text-center text-xs leading-6 text-[#8b948e]">
              بإرسال النموذج، تؤكد أن البيانات المدخلة تخصك أو أنك تملك
              موافقة صاحبها.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
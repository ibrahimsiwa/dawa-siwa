export type TaxonomyHouse = {
  id: string;
  name: string;
};

export type TaxonomyFamily = {
  id: string;
  name: string;
  houses: TaxonomyHouse[];
};

export type TaxonomyTribe = {
  id: string;
  name: string;
  families: TaxonomyFamily[];
};

export type SiwaRegion = {
  id: string;
  name: string;
  tribes: TaxonomyTribe[];
};

/**
 * أسماء تجريبية مؤقتة.
 * سيتم استبدالها بالبيانات المعتمدة بعد إرسال قائمة المناطق
 * والقبائل والعائلات والبيوت.
 */
export const siwaRegions: SiwaRegion[] = [
  {
    id: "region-1",
    name: "منطقة تجريبية أولى",
    tribes: [
      {
        id: "tribe-1-1",
        name: "قبيلة تجريبية أولى",
        families: [
          {
            id: "family-1-1-1",
            name: "عائلة تجريبية أولى",
            houses: [
              {
                id: "house-1-1-1-1",
                name: "بيت تجريبي أول",
              },
              {
                id: "house-1-1-1-2",
                name: "بيت تجريبي ثانٍ",
              },
            ],
          },
          {
            id: "family-1-1-2",
            name: "عائلة تجريبية ثانية",
            houses: [
              {
                id: "house-1-1-2-1",
                name: "بيت تجريبي أول",
              },
              {
                id: "house-1-1-2-2",
                name: "بيت تجريبي ثانٍ",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "region-2",
    name: "منطقة تجريبية ثانية",
    tribes: [
      {
        id: "tribe-2-1",
        name: "قبيلة تجريبية ثانية",
        families: [
          {
            id: "family-2-1-1",
            name: "عائلة تجريبية أولى",
            houses: [
              {
                id: "house-2-1-1-1",
                name: "بيت تجريبي أول",
              },
              {
                id: "house-2-1-1-2",
                name: "بيت تجريبي ثانٍ",
              },
            ],
          },
        ],
      },
    ],
  },
];

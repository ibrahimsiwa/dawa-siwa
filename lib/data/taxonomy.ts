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

export const siwaTaxonomy: TaxonomyTribe[] = [
  {
    id: "tribe-1",
    name: "قبيلة تجريبية أولى",
    families: [
      {
        id: "family-1-1",
        name: "عائلة تجريبية أولى",
        houses: [
          {
            id: "house-1-1-1",
            name: "بيت تجريبي أول",
          },
          {
            id: "house-1-1-2",
            name: "بيت تجريبي ثانٍ",
          },
        ],
      },
      {
        id: "family-1-2",
        name: "عائلة تجريبية ثانية",
        houses: [
          {
            id: "house-1-2-1",
            name: "بيت تجريبي أول",
          },
          {
            id: "house-1-2-2",
            name: "بيت تجريبي ثانٍ",
          },
        ],
      },
    ],
  },
  {
    id: "tribe-2",
    name: "قبيلة تجريبية ثانية",
    families: [
      {
        id: "family-2-1",
        name: "عائلة تجريبية أولى",
        houses: [
          {
            id: "house-2-1-1",
            name: "بيت تجريبي أول",
          },
          {
            id: "house-2-1-2",
            name: "بيت تجريبي ثانٍ",
          },
        ],
      },
      {
        id: "family-2-2",
        name: "عائلة تجريبية ثانية",
        houses: [
          {
            id: "house-2-2-1",
            name: "بيت تجريبي أول",
          },
          {
            id: "house-2-2-2",
            name: "بيت تجريبي ثانٍ",
          },
        ],
      },
    ],
  },
  {
    id: "tribe-3",
    name: "قبيلة تجريبية ثالثة",
    families: [
      {
        id: "family-3-1",
        name: "عائلة تجريبية أولى",
        houses: [
          {
            id: "house-3-1-1",
            name: "بيت تجريبي أول",
          },
          {
            id: "house-3-1-2",
            name: "بيت تجريبي ثانٍ",
          },
        ],
      },
    ],
  },
];
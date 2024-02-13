import defaultWeaponImage from "./assets/defaultWeaponImage.png";
import defaultSpreadControlImage from "./assets/defaultSpreadControl.svg";
// const object = {
//   id: 1,
//   title: "Бабочка",
//   icon: defaultWeaponImage,
//   reloadDuration:2.5,
//   bodyDamage:44,
//   headDamage:143,
//   paymentForKill:[300, 150],
//   bulletBox:[30, 96],
//   price:2700,
//   accuracyRange:22,
//   accuracyTemp:600,
//   runSpeed:215,
//   side:'Террористы',
//   description:"Автоматическая штурмовая винтовка. Прототипом является винтовк",
//   spreadControl: defaultSpreadControlImage,
// };
export const wikiArr = [
  {
    categoryId: 1,
    categoryTitle: "Ножи",
    categoryArr: [
      {
        id: 1,
        title: "Бабочка",
        icon: defaultWeaponImage,
        characteristics: {
          reloadDuration: {
            name:'ВРЕМЯ ПЕРЕЗАРЯДКИ', value: ["2.5"],
            units: "СЕК",
          },
          bodyDamage: { name: "УРОН ПО ТЕЛУ", value: ["44"], units: "" },
          headDamage: { name: "УРОН В ГОЛОВУ", value: ["143"], units: "" },
          paymentForKill: {
            name: "ПЛАТА ЗА УБИЙСТВО",
            value: ["$300", "$150"],
            units: "",
          },
          bulletsBox: { name: "МАГАЗИН", value: ["30", "90"], units: "" },
          inGamePrice: {
            name: "ВНУТРИИГРОВАЯ ЦЕНА",
            value: ["$2700"],
            units: "",
          },
          accuracyRange: {
            name: "ДИАПАЗОН ТОЧНОСТИ",
            value: ["22"],
            units: "М",
          },
          accuracyTemp: {
            name: "ТЕМП ТОЧНОСТИ",
            value: ["600"],
            units: "ВЫСТР/МИН",
          },
          runSpeed: { name: "СКОРОСТЬ БЕГА", value: ["215"], units: "" },
          side: { name: "СТОРОНА", value: ["ТЕРРОРИСТЫ"], units: "" },
        },
        description:
          "Автоматическая штурмовая винтовка. Прототипом является винтовка разработанная в Советском Союзе в 1949 году. На сегодняшний день является самым распространенным стрелковым оружием в мире. Среди главных достоинств АК-47 можно выделить высокий урон и относительно невысокая цена. К недостаткам относится низкая точность и высокая отдача после нескольких выстрелов.",
        spreadControl: defaultSpreadControlImage,
        skins: [
          {
            id: 1,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
            info: [
              {
                title: "Описание паттерна",
                description:
                  "Автоматическая штурмовая винтовка. Прототипом является винтовка разработанная в Советском Союзе в 1949 году. На сегодняшний день является самым распространенным стрелковым оружием в мире.",
              },
              {
                title: "История появления",
                description:
                  "Автоматическая штурмовая винтовка. Прототипом является винтовка разработанная в Советском Союзе в 1949 году. На сегодняшний день является самым распространенным стрелковым оружием в мире.",
              },
            ],
          },
          {
            id: 2,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [107620, 123256456],
          },
          {
            id: 3,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 4,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 5,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 6,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 7,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 8,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 9,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 10,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [107620, 123256456],
          },
          {
            id: 11,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 12,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 13,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 14,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 15,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 16,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 17,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 18,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 19,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 20,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 21,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [307620, 123256456],
          },
          {
            id: 22,
            title: "Дикий лотос",
            icon: defaultWeaponImage,
            price: [907620, 123256456],
          },
        ],
      },
      {
        id: 2,
        title: "Столовый",
        icon: defaultWeaponImage,
      },
      {
        id: 3,
        title: "Десертный",
        icon: defaultWeaponImage,
      },
      {
        id: 4,
        title: "Керамбит",
        icon: defaultWeaponImage,
      },
      {
        id: 5,
        title: "Калашников",
        icon: defaultWeaponImage,
      },
      {
        id: 6,
        title: "Танто",
        icon: defaultWeaponImage,
      },
    ],
  },
  {
    categoryId: 2,
    categoryTitle: "Пистолеты",
    categoryArr: [
      {
        id: 1,
        title: "Наган",
        icon: defaultWeaponImage,
      },
      {
        id: 2,
        title: "Глок",
        icon: defaultWeaponImage,
      },
      {
        id: 3,
        title: "Дигл",
        icon: defaultWeaponImage,
      },
      {
        id: 4,
        title: "Вальтер",
        icon: defaultWeaponImage,
      },
      {
        id: 5,
        title: "Макарыч",
        icon: defaultWeaponImage,
      },
    ],
  },
];

export const wikiArrInfo = [
  {
    id: 1,
    title: "видов оружия",
    value: "53",
  },
  {
    id: 2,
    title: "уникальных скинов",
    value: "1732",
  },
  {
    id: 3,
    title: "различных паттерн-индексов",
    value: "+2.3M",
  },
];

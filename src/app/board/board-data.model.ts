import { DateData } from "./date-data.model";

export interface BoardData {
  dates: DateData[];
}

export const BOARD_DATA: BoardData = {
  dates: [
    {
      dayNumber: 1,
      isOpened: false,
      image: {
        fileName: "airplane.jpg",
        adjustment: {
          height: 1.2,
          left: -110,
          top: -60,
        },
      },
    },
    {
      dayNumber: 2,
      image: {
        fileName: "bambi.png",
        adjustment: {
          left: -30,
          top: -50,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 3,
      image: {
        fileName: "squirrel.jpg",
      },
      isOpened: false,
    },
    {
      dayNumber: 4,
      image: {
        fileName: "bunny.jpg",
        adjustment: {
          height: 0.9,
          left: -120,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 5,
      image: {
        fileName: "sand-castle.jpg",
        adjustment: {
          height: 1.3,
          left: 0,
          top: -100,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 6,
      image: {
        fileName: "canoe.jpg",
        adjustment: {
          height: 0.9,
          left: -125,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 7,
      audioFileName: "",
      image: {
        fileName: "firetruck.jpg",
      },
      video: {
        ref: "d3Dib0EUtJc",
        provider: "youtube",
        offsets: {
          start: 153,
          end: 298,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 8,
      audioFileName: "",
      image: {
        fileName: "baby_jake.jpg",
        adjustment: {
          left: -35,
          top: -40,
        },
      },
      video: {
        ref: "XEWvzdql-mI",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 9,
      audioFileName: "cat",
      image: {
        fileName: "cat.jpg",
        adjustment: {
          left: -80,
        },
      },
      video: {
        ref: "ohUijzak114",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 10,
      audioFileName: "",
      image: {
        fileName: "babblarna.jpg",
        adjustment: { left: -100 },
      },
      video: {
        ref: "lMmk3DYUnTM",
        provider: "youtube",
      },
      isOpened: false,
      isUnlocked: false,
    },

    {
      dayNumber: 11,
      audioFileName: "",
      image: {
        fileName: "helicopter.jpeg",
        adjustment: { left: -150 },
      },
      video: {
        ref: "eDvSrMnL-8M",
        provider: "youtube",
        offsets: {
          start: 82,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 12,
      audioFileName: "",
      image: {
        fileName: "polar_bear.jpg",
        adjustment: {
          left: -150,
        },
      },
      video: {
        ref: "spx-0FrsLKQ",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 13,
      audioFileName: "",
      image: {
        fileName: "lucia.jpg",
        adjustment: {
          height: 0.86,
          left: -150,
        },
      },
      video: {
        ref: "-rIu-8R1cj4",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 14,
      audioFileName: "train",
      image: {
        fileName: "train.jpg",
        adjustment: {
          top: -40,
          left: -20,
        },
      },
      video: {
        ref: "L_AzHWCOODY",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 15,
      audioFileName: "wave",
      image: {
        fileName: "boat.jpg",
        adjustment: {
          top: -20,
        },
      },
      video: {
        ref: "8SzzFqXMJxY",
        offsets: {
          start: 88,
          end: 166,
        },
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 16,
      audioFileName: "",
      image: {
        fileName: "spider.png",
      },
      video: {
        ref: "Ryr1sShWGko",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 17,
      audioFileName: "",
      image: {
        fileName: "bob.png",
        adjustment: {
          left: -30,
          height: 0.9,
        },
      },
      video: {
        ref: "a4oFmaNO0SY",
        provider: "youtube",
        offsets: {
          start: 1,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 18,
      audioFileName: "",
      image: {
        fileName: "xmas-tree.png",
        adjustment: {
          left: -33,
          height: 1.2,
        },
      },
      video: {
        ref: "xQyYyh7vsSU",
        provider: "youtube",
      },
      isOpened: false,
    },
    {
      dayNumber: 19,
      audioFileName: "",
      image: {
        fileName: "digging_machine.jpg",
        adjustment: {
          height: 0.9,
          left: -200,
        },
      },
      video: { ref: "h0EezjY9gPQ", provider: "youtube" },
      isOpened: false,
    },
    {
      dayNumber: 20,
      audioFileName: "dogBark",
      image: {
        fileName: "dog.jpg",
        adjustment: {
          left: -100,
          top: -20,
        },
      },
      video: { ref: "-l48NQnDPS8", provider: "youtube" },
      isOpened: false,
    },
    {
      dayNumber: 21,
      audioFileName: "",
      image: {
        fileName: "snow_scooter.jpg",
        adjustment: {
          left: -220,
          height: 1.2,
        },
      },
      video: {
        ref: "_3S5i2kicEE",
        provider: "youtube",
        offsets: {
          start: 86,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 22,
      audioFileName: "",
      image: {
        fileName: "benny.png",
        adjustment: {
          left: -70,
          top: -20,
        },
      },
      video: {
        ref: "tXvZNugrO1A",
        provider: "youtube",
        offsets: {
          start: 22,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 23,
      audioFileName: "horseNeigh",
      image: {
        fileName: "horse.jpg",
        adjustment: {
          left: -25,
          top: -10,
        },
      },
      video: { ref: "vb1d69S8nCk", provider: "youtube" },
      isOpened: false,
    },
    {
      dayNumber: 24,
      audioFileName: "",
      image: {
        fileName: "santa_car.png",
        adjustment: { left: -50, top: -20 },
      },
      video: { ref: "Nult3KtauNc", provider: "youtube" },
      isOpened: false,
    },
  ],
};

import { DateData } from "./date-data.model";

export interface BoardData {
  dates: DateData[];
}

const duploBricks = {
  fileName: "duplo-bricks.webp",
  adjustment: {
    top: -10,
    left: -100,
  },
};

const blank = (dayNr) => {
  return {
    dayNumber: dayNr,
    isOpened: false,
  };
};

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
      image: {
        fileName: "giraffe.jpg",
        adjustment: {
          height: 1,
          left: -200,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 8,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 9,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 10,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 11,
      image: {
        fileName: "lion-cliff.png",
        adjustment: {
          height: 1,
          left: -40,
          top: -20,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 12,
      image: {
        fileName: "lions.jpg",
        adjustment: {
          height: 1,
          left: -150,
          top: -30,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 13,
      image: {
        fileName: "surf-van2.jpg",
        adjustment: {
          height: 1,
          left: -100,
          top: -50,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 14,
      image: {
        fileName: "photo.jpg",
        adjustment: {
          height: 1,
          left: -120,
          top: -30,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 15,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 16,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 17,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 18,
      image: duploBricks,
      isOpened: false,
    },
    {
      dayNumber: 19,
      image: {
        fileName: "panda-den.png",
        adjustment: {
          height: 0.86,
          left: -10,
        },
      },
      isOpened: false,
    },
    {
      dayNumber: 20,
      image: {
        fileName: "pandas.jpg",
        adjustment: {
          left: -50,
          height: 0.88,
        },
      },
      isOpened: false,
    },
    blank(21),
    blank(22),
    blank(23),
    blank(24),
  ],
};

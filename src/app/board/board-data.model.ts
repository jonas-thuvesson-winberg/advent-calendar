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
    image: {
      fileName: "blank.jpg",
      adjustment: {
        height: 1.2,
        left: -110,
        top: -60,
      },
    },
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
    blank(11),
    blank(12),
    blank(13),
    blank(14),
    blank(15),
    blank(16),
    blank(17),
    blank(18),
    blank(19),
    blank(20),
    blank(21),
    blank(22),
    blank(23),
    blank(24),
  ],
};

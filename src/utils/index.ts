import { HB_DATA } from "../const";

export const dayTitle = (number: number) => {
  if (number > 10 && [11, 12, 13, 14].includes(number % 100)) return "дней";
  const last_num = number % 10;
  if (last_num == 1) return "день";
  if ([2, 3, 4].includes(last_num)) return "дня";
  if ([5, 6, 7, 8, 9, 0].includes(last_num)) return "дней";
};

export const getText = () => {
  const today = new Date();
  today.setMilliseconds(0);
  today.setSeconds(0);
  today.setMinutes(0);
  today.setHours(0);
  const todayYear = today.getFullYear();
  const hbDate = new Date(todayYear, HB_DATA.month, HB_DATA.date, 0, 0, 0, 0);
  if (hbDate.valueOf() - today.valueOf() === 0) return "С днём рождения Брат!";
  if (hbDate.valueOf() - today.valueOf() > 0) {
    const days = (hbDate.valueOf() - today.valueOf()) / (1000 * 60 * 60 * 24);
    return `День рождения через ${days} ${dayTitle(days)}`;
  }
  if (hbDate.valueOf() - today.valueOf() > 0) {
    const days = (today.valueOf() - hbDate.valueOf()) / (1000 * 60 * 60 * 24);
    return `День рождения через ${days} ${dayTitle(days)}`;
  }
  return "Hello world";
};

export const isHB = () => {
  const today = new Date();
  today.setMilliseconds(0);
  today.setSeconds(0);
  today.setMinutes(0);
  today.setHours(0);
  const todayYear = today.getFullYear();
  const hbDate = new Date(todayYear, HB_DATA.month, HB_DATA.date, 0, 0, 0, 0);
  return hbDate.valueOf() - today.valueOf() === 0;
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

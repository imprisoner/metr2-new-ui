import { differenceInMilliseconds, parseISO } from "date-fns";
import type { IsoDateString } from "~/types/pocketbase-types";

const getTimeElapsedSincePublish = (publishDate: string) => {
  const parsedDate = parseISO(publishDate);
  return differenceInMilliseconds(new Date(), parsedDate);
};

const createLabel = (number: number, titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : (cases[number % 10 < 5 ? number % 10 : 5] as number)
  ] as string;
}

export const getFormattedTimeElapsed = (dateString: IsoDateString) => {
  const timeElapsedMs = getTimeElapsedSincePublish(dateString);

  const seconds = Math.floor(timeElapsedMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return `${seconds} ${createLabel(seconds, ["сек", "сек", "сек"])}`;
  } else if (minutes < 60) {
    return `${minutes} ${createLabel(minutes, ["мин", "мин", "мин"])}`;
  } else if (hours < 24) {
    return `${hours} ${createLabel(hours, ["час", "часа", "часов"])}`;
  } else if (days < 30) {
    return `${days} ${createLabel(days, ["день", "дня", "дней"])}`;
  } else if (months < 12) {
    return `${months} ${createLabel(months, ["мес", "мес", "мес"])}`;
  } else {
    return `${years} ${createLabel(years, ["год", "года", "лет"])}`;
  }
}


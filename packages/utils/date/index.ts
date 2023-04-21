import { isDate } from '../is';

type DateInput = string | Date;

// 字符串转换成Date()
export function parseDate(dateInput: DateInput): Date {
  if (isDate(dateInput)) {
    return dateInput;
  } else {
    const [datePart, timePart] = dateInput.split(' ');
    const [year, month = 1, day = 1] = datePart.split(/-|\//).map((i) => Number(i || 1)); // 支持 "-" 和 "/" 作为日期分隔符
    console.log(year, month, day);
    if (timePart) {
      const [hour = 0, minute = 0, second = 0] = timePart.split(':').map(Number);
      const millisecond = Number(timePart.split('.')[1] || '0');
      return new Date(year, month - 1, day, hour, minute, second, millisecond);
    } else {
      return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
  }
}

// 时间转成日期
function parseDateTime(dateInput: DateInput): Date {
  if (isDate(dateInput)) {
    return dateInput;
  } else {
    const today = new Date();
    const parts = dateInput.split(' ');
    if (parts.length === 1) {
      // 只有时间部分，使用今天的日期
      const [hour, minute = 0, second = 0, millisecond = 0] = parts[parts.length - 1]
        .split(':')
        .flatMap((part) => part.split('.'))
        .map(Number);
      today.setHours(hour, minute, second, millisecond);
      return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, minute, second, millisecond);
    } else {
      // 包含日期部分，将时间添加到日期中
      return new Date(parseDate(dateInput));
    }
  }
}

// 判断时间是否在指定时间范围内
export function isDateTimeInRange(dateTimeRange: string, date: DateInput = new Date()): boolean {
  const parsedDate = parseDateTime(date);
  const [start, end] = dateTimeRange.split('-').map((time) => time.trim());
  const [startHour, startMinute = 0, startSecond = 0, startMillisecond = 0] = start
    .split(':')
    .flatMap((part) => part.split('.'))
    .map(Number);
  const [endHour, endMinute = 0, endSecond = 0, endMillisecond = 0] = end
    .split(':')
    .flatMap((part) => part.split('.'))
    .map(Number);

  if (
    !isNaN(startHour) &&
    !isNaN(startMinute) &&
    !isNaN(startSecond) &&
    !isNaN(startMillisecond) &&
    !isNaN(endHour) &&
    !isNaN(endMinute) &&
    !isNaN(endSecond) &&
    !isNaN(endMillisecond)
  ) {
    const dateInMilliseconds =
      parsedDate.getHours() * 3600 * 1000 +
      parsedDate.getMinutes() * 60 * 1000 +
      parsedDate.getSeconds() * 1000 +
      parsedDate.getMilliseconds();
    const startInMilliseconds =
      startHour * 3600 * 1000 + startMinute * 60 * 1000 + startSecond * 1000 + startMillisecond;
    const endInMilliseconds = endHour * 3600 * 1000 + endMinute * 60 * 1000 + endSecond * 1000 + endMillisecond;

    return dateInMilliseconds >= startInMilliseconds && dateInMilliseconds <= endInMilliseconds;
  }

  console.error('isDateTimeInRange: Invalid date range format');
  return false;
}

// 判断日期是否在开始结束日期内
export function isDateInRange(startDateInput: DateInput, endDateInput: DateInput, dateInput: DateInput): boolean {
  const startDate = parseDate(startDateInput);
  const endDate = parseDate(endDateInput);
  const date = parseDate(dateInput);

  if (isNaN(startDate.valueOf()) || isNaN(endDate.valueOf())) {
    throw new Error('Invalid date range format');
  }

  return date >= startDate && date <= endDate;
}

// 比较日期
type ComparisonType = 'greater' | 'greaterOrEqual' | 'less' | 'lessOrEqual';

export function compareDates(
  date1: DateInput,
  date2: DateInput,
  comparison: ComparisonType = 'greaterOrEqual',
): boolean {
  const parsedDate1 = parseDate(date1);
  const parsedDate2 = parseDate(date2);

  switch (comparison) {
    case 'greater':
      return parsedDate1 > parsedDate2;
    case 'greaterOrEqual':
      return parsedDate1 >= parsedDate2;
    case 'less':
      return parsedDate1 < parsedDate2;
    case 'lessOrEqual':
      return parsedDate1 <= parsedDate2;
    default:
      throw new Error(`Invalid comparison type: ${comparison}`);
  }
}

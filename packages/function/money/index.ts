// 金额添加千分符
function amountSeparator(amount: number | string): string {
  const [integerPart, decimalPart] = String(amount).split('.');
  const integerPartWithSeparator = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimalPart ? `${integerPartWithSeparator}.${decimalPart}` : integerPartWithSeparator;
}

// 金额保留小数位
function formatDecimal(amount: number | string, decimalPlaces: number): string {
  return Number(amount).toFixed(decimalPlaces);
}

// 分、元单位互转
function centsToYuan(cents: number | string): number {
  return Number(cents) / 100;
}

function yuanToCents(yuan: number | string): number {
  return Math.round(Number(yuan) * 100);
}

function toChineseUpper(money: number | string): string {
  const UPPER_NUMBERS = '零壹贰叁肆伍陆柒捌玖';
  const BASE_UNITS = ['', '拾', '佰', '仟'];
  const UPPER_UNITS = ['', '万', '亿', '兆'];
  const UPPER_DECIMAL_UNIT = '角分毫厘';
  const INTEGER_RMB_UNIT = '元';
  const DECIMAL_RMB_UNIT = '整';

  // 分割整数和小数位
  const [integerPart, decimalPart] = String(money).split('.');

  let upperIntegerPart = '';
  let zeroCount = 0;

  if (Number(integerPart) > 0) {
    for (let i = 0; i < integerPart.length; i++) {
      // 将数字转成大写数字
      const digit = Number(integerPart[i]);
      const digitUpper = UPPER_NUMBERS[digit];

      const digitUnit = BASE_UNITS[(integerPart.length - i - 1) % 4];
      if (digit === 0) {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          upperIntegerPart += UPPER_NUMBERS[0];
        }
        zeroCount = 0;
        upperIntegerPart += digitUpper + digitUnit;
      }
      if ((integerPart.length - i - 1) % 4 === 0 && zeroCount < 4) {
        upperIntegerPart += UPPER_UNITS[(integerPart.length - i - 1) / 4];
      }
    }

    upperIntegerPart += INTEGER_RMB_UNIT;
  }

  if (decimalPart) {
    const decimalDigits = decimalPart.split('');
    for (let i = 0; i < decimalDigits.length; i++) {
      const digit = Number(decimalDigits[i]);
      const digitUpper = UPPER_NUMBERS[digit];
      const digitUnit = UPPER_DECIMAL_UNIT[i];
      upperIntegerPart += digitUpper + digitUnit;
    }
  }

  if (upperIntegerPart == '') {
    upperIntegerPart += UPPER_NUMBERS[0] + INTEGER_RMB_UNIT + DECIMAL_RMB_UNIT;
  } else if (!decimalPart) {
    upperIntegerPart += DECIMAL_RMB_UNIT;
  }

  return upperIntegerPart;
}

export { amountSeparator, formatDecimal, centsToYuan, yuanToCents, toChineseUpper };

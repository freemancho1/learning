const DATE_SPLIT = "-";

export function digitPad(digit, len) {
    digit = String(digit);
    while (digit.length < len) digit = `0${digit}`;
    return digit;
}

export function convertDateToStr(date) {
    return [
        date.getFullYear(),
        digitPad(date.getMonth()+1, 2),
        digitPad(date.getDate(), 2)
    ].join(DATE_SPLIT);
}

export function convertStrToDate(str) {
    const split = str.split(DATE_SPLIT);
    return new Date(+split[0], +split[1]-1, +split[2]);
}
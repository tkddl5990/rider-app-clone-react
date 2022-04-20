export const calcRem = (size: number) => `${size / 10}rem`;

export const convertRem = (value: number | string) =>
  typeof value === 'string' ? value : calcRem(value as number);

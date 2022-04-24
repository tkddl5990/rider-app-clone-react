import { style } from '@vanilla-extract/css';

export const flex = (align: string, justify: string) =>
  style({
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
  });

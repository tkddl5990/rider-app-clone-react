import { CSSProperties, style } from '@vanilla-extract/css';

export const flex = (
  align: CSSProperties['alignItems'],
  justify: CSSProperties['justifyContent']
) =>
  style({
    display: 'flex',
    alignItems: align,
    justifyContent: justify,
  });

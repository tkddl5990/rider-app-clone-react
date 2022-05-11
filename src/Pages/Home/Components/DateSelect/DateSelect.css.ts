import { vars } from '@Styles/Theme.css';
import { convertRem } from '@Styles/Utils';
import { style } from '@vanilla-extract/css';

export const label = style({
  fontSize: vars.sizes[14],
  marginBottom: convertRem(8),
});

export const dateSelectBox = style({
  border: `1px solid ${vars.color.gray[800]}`,
});

export const dateListItem = style({
  border: `1px solid ${vars.color.gray[500]}`,
  padding: vars.sizes[16],
  fontSize: vars.sizes[16],
});

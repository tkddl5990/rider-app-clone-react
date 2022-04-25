import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const emptyTitle = style({
  paddingTop: '3rem',
  fontSize: vars.sizes[20],
  lineHeight: '3rem',
});

export const emptySpan = style({
  fontSize: vars.sizes[14],
  color: vars.color.gray[600],
  marginTop: '1rem',
  display: 'block',
});

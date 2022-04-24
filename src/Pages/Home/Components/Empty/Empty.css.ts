import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const emptyTitle = style({
  paddingTop: '30px',
  fontSize: vars.sizes[20],
  lineHeight: '30px',
});

export const emptySpan = style({
  fontSize: vars.sizes[14],
  color: vars.color.gray[600],
  marginTop: '10px',
  display: 'block',
});

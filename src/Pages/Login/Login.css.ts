import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex('center', 'center'),
  {
    flexDirection: 'column',
    height: '100vh',
  },
]);

export const logo = style([
  flex('center', 'center'),
  {
    width: '13rem',
    height: '13rem',
    backgroundColor: vars.color.gray[800],
    color: vars.color.gray[100],
    marginBottom: '8rem',
  },
]);

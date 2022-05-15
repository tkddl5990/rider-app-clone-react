import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex('center', 'flex-start'),
  {
    flexDirection: 'column',
    height: '100vh',
    paddingTop: vars.sizes[20],
  },
]);

export const logo = style([
  flex('center', 'center'),
  {
    width: '13rem',
    height: '13rem',
    backgroundColor: vars.color.gray[100],
    color: vars.color.gray[900],
    marginBottom: '8rem',
    fontSize: '3.6rem',
  },
]);

import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const logo = style({
  width: '130px',
  height: '130px',
  backgroundColor: vars.color.gray[800],
  color: vars.color.gray[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '80px',
});
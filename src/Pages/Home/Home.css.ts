import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  height: 'calc(100vh - 57px)',
});

export const bottmButton = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '54px',
  backgroundColor: '#1ba4ed',
  color: '#fff',
  fontSize: '1.6rem',
});

export const listWrapper = style({
  height: 'calc(100% - (43px + 170px + 54px))',
  backgroundColor: '#f6f6f7',
  textAlign: 'center',
});

export const emptyTitle = style({
  paddingTop: '30px',
  fontSize: '2rem',
  lineHeight: '30px',
});

export const emptySpan = style({
  fontSize: '1.4rem',
  color: '#666',
  marginTop: '10px',
  display: 'block',
});

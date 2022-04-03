import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '43px',
});

const list = style({
  textAlign: 'center',
  height: '100%',
  lineHeight: '43px',
  borderBottom: '1px solid #dbdbdb',
  flex: 1,
  fontSize: '1.6rem',
  '@media': {
    'screen and (max-width: 320px)': {
      fontSize: '1.2rem',
    },
  },
});

const listActive = style({
  borderBottom: '2px solid #333',
  fontWeight: 600,
});

export const active = style([list, listActive]);
export const inactive = style([list]);

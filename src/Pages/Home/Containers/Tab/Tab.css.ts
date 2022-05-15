import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '4.3rem',
});

const list = style({
  textAlign: 'center',
  height: '100%',
  lineHeight: '4.3rem',
  borderBottom: '.1rem solid #dbdbdb',
  flex: 1,
  fontSize: vars.sizes[16],
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 320px)': {
      fontSize: vars.sizes[12],
    },
  },
});

const listActive = style({
  borderBottom: `.2rem solid ${vars.color.gray[800]}`,
  fontWeight: 600,
});

export const active = style([list, listActive]);
export const inactive = style([list]);

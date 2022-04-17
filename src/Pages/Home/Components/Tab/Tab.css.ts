import { vars } from '@Styles/Theme.css';
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
  fontSize: vars.sizes[16],
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 320px)': {
      fontSize: vars.sizes[12],
    },
  },
});

const listActive = style({
  borderBottom: `2px solid ${vars.color.gray[800]}`,
  fontWeight: 600,
});

export const active = style([list, listActive]);
export const inactive = style([list]);

import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { convertRem } from '@Styles/Utils';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: vars.sizes[16],
});

export const label = style({
  fontSize: vars.sizes[14],
  marginBottom: convertRem(8),
});

export const box = style({
  marginTop: vars.sizes[12],
});

export const dateBox = style({
  border: `1px solid ${vars.color.gray[800]}`,
  height: '4.4rem',
  padding: vars.sizes[16],
});

export const statusBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4%',
});

export const statusList = style([
  flex('center', 'center'),
  {
    border: `1px solid ${vars.color.gray[800]}`,
    width: '48%',
    height: '4rem',
    fontSize: vars.sizes[14],
  },
]);

const inactive = style({
  color: vars.color.gray[300],
  border: `.1rem solid ${vars.color.gray[300]}`,
});

export const statusListInActive = style([statusList, inactive]);

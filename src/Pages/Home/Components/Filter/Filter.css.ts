import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '16px',
});

export const label = style({
  fontSize: '1.4rem',
  marginBottom: '8px',
});

export const box = style({
  marginTop: '12px',
});

export const dateBox = style({
  border: '1px solid #333',
  height: '44px',
  padding: '16px',
});

export const statusBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4%',
});

export const statusList = style({
  border: '1px solid #333',
  width: '48%',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.4rem',
});

const inactive = style({
  color: '#dadada',
  border: '1px solid #dadada',
});

export const statusListInActive = style([statusList, inactive]);

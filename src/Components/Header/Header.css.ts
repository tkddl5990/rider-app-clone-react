import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  padding: vars.sizes[16],
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #dbdbdb',
});

export const headerIcon = style({
  selectors: {
    [`${header} &`]: {
      width: '20px',
      height: '20px',
    },
  },
});

export const headerIconImg = style({
  selectors: {
    [`${headerIcon} &`]: {
      width: '100%',
      height: '100%',
    },
  },
});

export const headerTitle = style({
  fontSize: vars.sizes[16],
  fontWeight: '500',
});

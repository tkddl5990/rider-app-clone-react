import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  flex('center', 'space-between'),
  {
    padding: vars.sizes[16],
    borderBottom: '.1rem solid #dbdbdb',
  },
]);

export const headerIcon = style({
  selectors: {
    [`${header} &`]: {
      width: '2rem',
      height: '2rem',
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
  fontWeight: 500,
});

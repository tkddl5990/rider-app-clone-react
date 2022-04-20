import { createGlobalTheme } from '@vanilla-extract/css';

import { calcRem } from './Utils';

export const vars = createGlobalTheme(':root', {
  color: {
    gray: {
      100: '#fff',
      200: '#fafafa',
      300: '#eaeaea',
      400: '#999',
      500: '#888',
      600: '#666',
      700: '#444',
      800: '#333',
      900: '#111',
    },
    blue: {
      default: '#1ba4ed',
    },
  },
  sizes: {
    10: calcRem(10),
    12: calcRem(12),
    14: calcRem(14),
    16: calcRem(16),
    18: calcRem(18),
    20: calcRem(20),
    22: calcRem(22),
  },
});

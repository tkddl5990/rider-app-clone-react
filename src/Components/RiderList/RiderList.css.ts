import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  backgroundColor: '#fff',
  padding: vars.sizes[12],
  marginBottom: vars.sizes[16],
});

export const listTitle = style([
  flex('center', 'space-between'),
  {
    fontSize: '1.4rem',
    paddingBottom: vars.sizes[10],
    borderBottom: `.1rem solid ${vars.color.gray[300]}`,
  },
]);

export const listTitleLeft = style([flex('center', 'normal'), { columnGap: 4 }]);

export const listTitleNumber = style({
  fontWeight: '600',
});

export const ListTitleText = style({});

export const listTitleStatus = style({
  color: 'red',
  fontWeight: '500',
});

export const listContent = style({
  padding: `${vars.sizes[20]} 0 0 0`,
});

export const listContentText = style({
  fontSize: '1.4rem',
  lineHeight: '2.2rem',
});

export const listContentBoldText = style([
  listContentText,
  {
    fontWeight: '600',
  },
]);

export const listContentLastText = style([
  listContentText,
  {
    marginBottom: vars.sizes[10],
    color: vars.color.gray[400],
  },
]);

export const listContentButton = style({
  width: '100%',
  height: '3.6rem',
  backgroundColor: vars.color.blue.default,
  color: vars.color.gray[100],
});

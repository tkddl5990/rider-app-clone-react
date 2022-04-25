import { flex } from '@Styles/Common.css';
import { vars } from '@Styles/Theme.css';
import { calcRem } from '@Styles/Utils';
import { style } from '@vanilla-extract/css';

export const container = style([
  flex('center', 'flex-start'),
  {
    flexDirection: 'column',
    height: '100vh',
    paddingTop: vars.sizes[20],
  },
]);

export const logo = style([
  flex('center', 'center'),
  {
    width: '13rem',
    height: '13rem',
    backgroundColor: vars.color.gray[100],
    color: vars.color.gray[900],
    marginBottom: '8rem',
    fontSize: '3.6rem',
  },
]);

export const formWrapper = style([
  flex('center', 'center'),
  {
    width: '100%',
    padding: vars.sizes[20],
    flexDirection: 'column',
    rowGap: vars.sizes[12],
  },
]);

export const input = style({
  border: `1px solid ${vars.color.gray[400]}`,
  background: vars.color.gray[200],
  fontSize: '1.6rem',
  padding: vars.sizes[12],
  borderRadius: calcRem(3),
  color: vars.color.gray[700],
  ':focus': {
    border: `.1rem solid ${vars.color.blue.default}`,
    boxShadow: `0 0 .5rem rgba(0, 112, 243, 0.5)`,
  },
  selectors: {
    [`${formWrapper} > &`]: {
      width: '100%',
    },
  },
});

export const submitButton = style([
  flex('center', 'center'),
  {
    background: vars.color.blue.default,
    width: '100%',
    height: '5.1rem',
    color: vars.color.gray[100],
    fontSize: vars.sizes[22],
    borderRadius: calcRem(3),
  },
]);

import * as R from 'ramda';

const upperCaseFirstLetter = R.over(R.head, R.toUpper);

export const buildSubtitle = R.compose(
  R.concat('By '),
  upperCaseFirstLetter,
  R.prop('by'),
);

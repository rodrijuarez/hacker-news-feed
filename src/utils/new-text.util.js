import * as R from 'ramda';

const upperCaseFirstLetter = R.compose(
  R.join(''),
  R.over(R.lensIndex(0), R.toUpper),
);

export const buildSubtitle = R.compose(
  R.concat('By '),
  R.prop('by'),
);

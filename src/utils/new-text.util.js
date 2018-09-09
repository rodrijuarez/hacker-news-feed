import * as R from 'ramda';

export const buildSubtitle = R.compose(
  R.concat('By '),
  R.prop('by'),
);

export const buildTitle = R.prop('title');

export const buildScore = R.compose(
  R.defaultTo(0),
  R.prop('score'),
);

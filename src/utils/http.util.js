import * as R from 'ramda';

export const createElementURL = element =>
  'https://hacker-news.firebaseio.com/v0/item/' + element + '.json';

export const fetchURLs = R.compose(
  Promise.all.bind(Promise),
  R.map(fetch),
);

export const resultsToJSON = R.compose(
  Promise.all.bind(Promise),
  R.map(i => i.json()),
);

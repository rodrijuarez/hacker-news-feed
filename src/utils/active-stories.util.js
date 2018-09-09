import * as R from 'ramda';

export const toggleStories = R.symmetricDifferenceWith(R.eqBy(R.prop('id')));

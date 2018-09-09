import {buildSubtitle} from './new-text.util';

const story = {
  by: 'rodrigo',
  descendants: 10,
  id: 17943030,
  kids: [17944537, 17944200, 17943139],
  score: 28,
  time: 1536444088,
  title: 'USB drives with no phantom load',
  type: 'story',
  url: 'http://joeyh.name/blog/entry/usb_drives_with_no_phantom_load/',
};

describe('new text util', () => {
  it('should have a function for building the sub-title', () => {
    expect(buildSubtitle(story)).toBe('By Rodrigo');
  });
});

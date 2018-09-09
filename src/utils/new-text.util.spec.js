import {buildSubtitle, buildTitle, buildScore} from './new-text.util';

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
    expect(buildSubtitle(story)).toBe('By rodrigo');
  });

  it('should have a function for building the title', () => {
    expect(buildTitle(story)).toBe(story.title);
  });

  it('should have a function for building the score', () => {
    expect(buildScore({score: undefined})).toBe(0);

    expect(buildScore(story)).toBe(story.score);
  });
});

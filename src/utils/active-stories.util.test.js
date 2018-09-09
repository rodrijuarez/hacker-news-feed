import {toggleStories, isActiveStory} from './active-stories.util';

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

const storyTwo = {
  by: 'rodrigo',
  descendants: 10,
  id: 17943031,
  kids: [17944537, 17944200, 17943139],
  score: 28,
  time: 1536444088,
  title: 'SSD Drive dual boot (Linux & Windows)',
  type: 'story',
  url: 'http://joeyh.name/blog/entry/usb_drives_with_no_phantom_load/',
};

it('should be able to toggle active stories into inactive', () => {
  expect(toggleStories([story], [story])).toEqual([]);
});

it('should be able to toggle active stories into inactive', () => {
  expect(toggleStories([], [story])).toEqual([story]);
});

it('should not toggle all the stories, only the ones received in the second param', () => {
  expect(toggleStories([story, storyTwo], [story])).toEqual([storyTwo]);
});

it('should be able to find active stories', () => {
  expect(isActiveStory([story], story)).toEqual(true);
});

it('should be able to find inactive stories', () => {
  expect(isActiveStory([storyTwo], story)).toEqual(false);
});

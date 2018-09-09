import {buildSubtitle} from './new-text.util';

expect('new text util', () => {
  it('should have a function for building the sub-title', () => {
    expect(newSubtitle(story)).toBe('By Rodrigo');
  });
});

import React from 'react';
import {
  act
} from 'react-dom/test-utils';
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react';
import StoriesContainer from '../containers/StoriesContainer';
import {
  storyIds,
  singularStory
} from '../fixtures';
import {
  getStory,
  getStoryIds
} from '../services/Api';
import {
  useInfiniteScroll
} from '../hooks';
import {
  STORY_INCREMENT
} from '../constants';

beforeEach(cleanup);

jest.mock('../hooks');

jest.mock('../services/Api.js', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn()
}));

test('renders the story container with a story', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<StoriesContainer />);
    await waitForElement(() => [
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('by: @Karl Hadwen')
    ])
  })
})
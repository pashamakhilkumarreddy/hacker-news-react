import React from 'react';
import {
  act
} from 'react-dom/test-utils';
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react';
import App from '../App';
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

test('Renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getText, queryByTestId } = render(<App />);
    await waitForElement(() => [
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(getByText('Hacker News Stories')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('By: Karl Hadwen')
    ])
  })
})
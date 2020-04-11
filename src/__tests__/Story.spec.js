import React from 'react';
import {
  act
} from 'react-dom/test-utils';
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react';
import Story from '../components/Story';
import {
  singularStory
} from '../fixtures';
import {
  getStory
} from '../services/Api';

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock('../hooks');

jest.mock('../services/Api.js', () => ({
  getStory: jest.fn(),
}));

test('renders the story component with content', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  await act(async () => {
    const {
      getByText,
      queryByTestId
    } = render( <Story storyID="1" />);
    await waitForElement(() => [
      expect(getByText('story')).toBeTruthy(),
      expect(getByText('Tarnished: Google Responds')).toBeTruthy(),
      expect(queryByTestId('story-by').textContent).toEqual('by: @Karl Hadwen'),
    ])
  })
})
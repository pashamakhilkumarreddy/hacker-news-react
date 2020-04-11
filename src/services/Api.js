import axios from 'axios';
import { selectStoryFields } from '../utils';

export const baseURL = `https://hacker-news.firebaseio.com/v0/`;

export const newStoriesURL = `${baseURL}newstories.json`;

export const storyURL = `${baseURL}item/`;

export const getStory = async (storyId) => {
  const result = await axios.get(`${storyURL}${storyId}.json`);
  const story = await result.data;
  return (story ? selectStoryFields(story) : {});
}

export const getStoryIds = async () => {
  const result = await axios.get(newStoriesURL).then(({
    data
  }) => data);
  return result;
}
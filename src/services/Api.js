import axios from 'axios';
import { selectStoryFields } from '../utils';

const baseURL = `https://hacker-news.firebaseio.com/v0/`;

const newStoriesURL = `${baseURL}newstories.json`;

const storyURL = `${baseURL}item/`;

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
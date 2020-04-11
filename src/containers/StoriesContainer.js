import React, { useState, useEffect, memo } from 'react';
import Story from '../components/Story';
import { getStoryIds } from '../services/Api';
import { useInfiniteScroll } from '../hooks';

const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [ storyIDS, setStoryIDS ] = useState([]);

  useEffect(() => {
    (async () => {
      const stories = await getStoryIds();
      stories && setStoryIDS(stories);
    })();
  }, []);

  return (
    <div className="columns is-mobile is-centered mt-3">
      <div className={`column is-11-widescreen is-11-desktop is-11-tablet`} data-test-id="stories-container">
        <h1 className={`title has-text-centered`}>Hacker News Stories</h1>
        {
          storyIDS.slice(0, count).map((storyId, index) => <Story key={index.toString()} storyID={storyId} />) 
        }
      </div>
    </div>
  );
}
  
export default StoriesContainer;
  
import React, { useState, useEffect } from 'react';
import Story from '../components/Story';
import { getStoryIds, getStory } from '../services/Api';

const StoriesContainer = () => {
  const [ storyIDS, setStoryIDS ] = useState([]);

  useEffect(() => {
    (async () => {
      const stories = await getStoryIds();
      stories && setStoryIDS(stories);
    })();
  }, []);

  return (
    <div className="columns is-mobile is-centered mt-3">
      <div className={`column is-11-widescreen is-11-desktop is-11-tablet`}>
        <h1 className={`title has-text-centered`}>Hacker News Stories</h1>
        {
          // storyIDS.map((storyId, index) => <Story key={index.toString()} storyID={storyId} />) 
        }
      </div>
    </div>
  );
}
  
export default StoriesContainer;
  
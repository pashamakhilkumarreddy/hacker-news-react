import React, { useEffect, Fragment, useState, memo } from 'react';
import { getStory } from '../services/Api';
import { mapTime } from '../mappers';
import { TimeStamp, TimeStampGroup } from '../selectors/StoryStyles';

const Story = memo(function ({ storyID  }) {
  const [story, setStory] = useState({});

  const renderDateTime = (dateTime) => dateTime ? Date(dateTime) : '';

  const checkPropAndRender = (prop) => prop ? prop : '';

  useEffect(() => {
    (async () => {
      try {
        const storyDetails = getStory(storyID);
        const formattedStory = await storyDetails;
        if (Object.keys(formattedStory).length && formattedStory.url) {
          setStory(formattedStory);
        }
      } catch (err) {
        console.log(err);
        // console.error(err.response.data.err);
      }
    })();
  });
  return (
    <Fragment>
      {
        Object.keys(story).length ?  (<div className={`box`} data-testid="story">
            <article className={`media`}>
              <div className={`media-left`}>
                <figure className={`image is-64x64`}>
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                </figure>
              </div>
            <div className={`media-content`}>
              <div className={`content`}>
                <p className={``}>
                  <strong >
                    <a href={checkPropAndRender(story.url)} target="_blank" rel="noopener noreferrer">
                      {checkPropAndRender(story.title)}
                    </a>
                  </strong>&nbsp;&nbsp;
                  { story.by ? <small data-testid="story-by">by: @{checkPropAndRender(story.by)}</small> : null }
                </p>
                <TimeStampGroup>
                  <time dateTime={renderDateTime(story.time)} data-testid="story-time">{renderDateTime(story.time)}</time>
                  <TimeStamp>
                    Posted: {mapTime(story.time)} ago
                  </TimeStamp>
                </TimeStampGroup>                
              </div>
            </div>
            </article>
          </div>) : null
      }
    </Fragment>
  );
})

export default Story;
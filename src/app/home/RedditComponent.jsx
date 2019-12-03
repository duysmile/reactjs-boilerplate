import React from 'react';

const RedditComponent = ({
  subRedditData,
  showRedditSpinner,
  fetchSubReddits,
}) => {
  if (showRedditSpinner) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {subRedditData.map((data, index) => (
        <li key={index}>
          <a href={`https://reddit.com${data.url}`} target="_blank">
            {data.title}
          </a>
        </li>
      ))}
      <button onClick={() => fetchSubReddits('reactjs')}>
        Show ReactJS subreddits
      </button>
    </ul>
  );
};

export default RedditComponent;

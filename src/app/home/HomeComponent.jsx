import React from 'react';

import RedditContainer from './RedditContainer';

const HomeComponent = ({
  count,
  onIncrementCount,
  onDecrementCount,
}) => {
  return (
    <div>
      <p>
        Current count: {count}
      </p>
      <button onClick={onIncrementCount}>Increment</button>
      <button onClick={onDecrementCount}>Decrement</button>
      <RedditContainer />
    </div>
  );
};

export default HomeComponent;

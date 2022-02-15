import React from 'react';
import useLatestData from '../utils/useLatestData';

const gql = String.raw;

export default function DataTicker({ className, data }) {
  const { nowPlaying, upNext } = useLatestData();
  return (
    <div className={className}>
      <p className="text--xx-small">
        {className === 'up-next' && 'NEXT → '}
        {nowPlaying}
      </p>
    </div>
  );
}

import { useEffect, useState } from 'react';

const gql = String.raw;

const endpoint = 'https://a9lzzkkf.api.sanity.io/v1/graphql/production/default';

export default function useLatestData() {
  const [nowPlaying, setNowPlaying] = useState();
  const [upNext, setUpNext] = useState();

  useEffect(function () {
    // when the component loads, fetch the data
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            Episode(id: "07a1f3ab-b6d8-4d24-b756-c8aee509420a") {
              name
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setNowPlaying(res.data.Episode.name);
        setUpNext(res.data.Episode.name);
      })
      .catch((err) => {
        console.log('SHOOOOOT');
        console.log(err);
      });
  }, []);
  return {
    nowPlaying,
    upNext,
  };
}

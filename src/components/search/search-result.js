import { Link } from "gatsby";
import React from "react";
import { connectStateResults, Hits, Index } from "react-instantsearch-dom";
import { playerContext } from "../provider";

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}

const HitCount = connectStateResults(
  ({ searchState, searchResults, children }) => {
    if (isEmpty(searchState)) {
      return null;
    }

    if (searchState.query == undefined) {
      return null;
    }

    if (searchState.query === "") {
      return null;
    }

    const hitCount = searchResults && searchResults.nbHits;

    return hitCount > 0 ? (
      <div className="HitCount">
        {hitCount} result{hitCount !== 1 ? `s` : ``}
      </div>
    ) : (
      <div className="HitCount">No results</div>
    );
  }
);

const PageHit = ({ hit }) => (
  <playerContext.Consumer>
    {(context) => (
      <div>
        <Link
          to={`/${hit.slug}`}
          onClick={() => context.setPlayerType("audio")}
        >
          <h4>{hit.name}</h4>
        </Link>
      </div>
    )}
  </playerContext.Consumer>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount>
      <Hits className="Hits" hitComponent={PageHit} />
    </HitCount>
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
);

export default SearchResult;

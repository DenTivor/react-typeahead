import * as React from 'react'

interface SearchBlockProps {
}

interface SearchBlockState {
}

class SearchBlock extends React.Component<SearchBlockProps, SearchBlockState> {

  render() {
    return(
      <div className="search-block">
        <input className="search-input"/>
        <div className="loader-wrapper">
          <div className="loader">Loading</div>
        </div>
      </div>
    );
  }
}


export default SearchBlock; 
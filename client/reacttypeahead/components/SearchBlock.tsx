import * as React from 'react'

interface SearchBlockProps {
  onExternalUpdate: (text:string)=>void;
  value?: string;
}

interface SearchBlockState {
  query: string; 
}

class SearchBlock extends React.Component<SearchBlockProps, SearchBlockState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: this.props.value || ''
    }; 
  }

  handleChange(e) {
    const text = e.target.value.trim();
    this.setState({ query: text });

     this.props.onExternalUpdate(text);
  }

  render() {
    return(
      <div className="search-block">
        <input className="search-input"
          onChange={this.handleChange.bind(this)}
          value={this.state.query}
        />
        <div className="loader-wrapper">
          <div className="loader">Loading</div>
        </div>
      </div>
    );
  }
}


export default SearchBlock; 
import * as React from 'react'

interface SearchBlockProps {
  onExternalValueUpdate: (text:string) => void;
  onExternalBlur: () => void;
  onExternalFocus: () => void;
  requestStatus: string;
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

    this.props.onExternalValueUpdate(text);
  }

  handleBlur() {
    this.props.onExternalBlur();
  }

  handleFocus() {
    this.props.onExternalFocus();
  }

  render() {
    let loadingStatus = (this.props.requestStatus) ? this.props.requestStatus : '';
    
    return(
      <div className={'search-block ' + loadingStatus}>
        <input className="search-input"
          onChange={this.handleChange.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onFocus={this.handleFocus.bind(this)}
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
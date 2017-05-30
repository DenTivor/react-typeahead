import * as React from 'react';

interface SearchInputProps {
	value?: string;
	initialFocusedInput: boolean;
	placeholder?: string;
	onFocus: (isFocused: boolean) => void;
	processTypeaheadValue: (text:string)=>void;
};

interface SearchInputState {
  text: string;
}

class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
	constructor(props, context) {
		super(props, context);
		this.state = {
			text: this.props.value || ''
		};
	}
	processSubmit(e) {
		const text = e.target.value.trim();
		this.props.processTypeaheadValue(text);
	}

	processChange(e) {
		this.setState({ text: e.target.value });
	}

	processFocus() {
		this.props.onFocus(true);
	}

	processBlur() {
		this.props.onFocus(false);
	}

	render() {
		// debugger;
		return(
		  <div className="search-block">
		    <input className="search-input"
		    	type="text"
				placeholder={this.props.placeholder}
				autoFocus={this.props.initialFocusedInput}
				value={this.state.text}
				onChange={this.processChange.bind(this)}
				onKeyUp={this.processSubmit.bind(this)} 
				onBlur={this.processBlur.bind(this)} 
				onFocus={this.processFocus.bind(this)}
		    />
		    <div className="loader-wrapper">
		      <div className="loader">Loading</div>
		    </div>
		  </div>
		)
	}
}

export default SearchInput;
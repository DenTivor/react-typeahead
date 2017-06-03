import { Dispatch } from 'redux' //it calls action to update state of app
import { connect } from 'react-redux'
import * as React from 'react'

import {
  SearchBlock,
  ItemsList,
  model,
  findIcons,
  requestIcons,
  receiveIcons
} from '../../reacttypeahead'

interface TypeaheadProps {
	icons: model.Icon[];
	value: string;
	dispatch: Dispatch<{}>;
	processStatus: string;
	getIcons(value: string): void;
	onExternalBlur(): void;
	onExternalFocus(): void;
}

interface TypeaheadState {
	viewStatus?: string;
}

class Typeahead extends React.Component<TypeaheadProps, TypeaheadState> {
	constructor(props, context) {
		super(props, context);
		this.state = {
	      viewStatus: 'passive'
	    }; 
	}

	updateViewStatus(value) {
		this.setState({ viewStatus: value });
	}

	render() {
		const { icons, getIcons, processStatus } = this.props;

		return (
			<div className="search-block-wrapper">
				<div className={'search-block-inner ' + this.state.viewStatus}>
				  <SearchBlock
				  	onExternalValueUpdate={(text: string) => {getIcons(text)}}
				  	onExternalBlur={this.updateViewStatus.bind(this, 'passive')}
					onExternalFocus={this.updateViewStatus.bind(this, 'active')}
					requestStatus={processStatus}
				  />
				  <ItemsList
				  	items={icons}
				  />
				</div>
			</div>
		)
	}
}

// Global State
// ToDo Переименовать Page -> App, Page -> TypeHead
const mapStateToProps = state => ({
	icons: state.data.icons,
	value: state.data.value,
	processStatus: state.data.processStatus
});

const mapDispatchToProps = dispatch => ({
	getIcons: (value: string) => {
		dispatch(requestIcons(value, 'loading'));

		findIcons(value).then((icons: model.Icon[]) => {
			dispatch(receiveIcons(icons, ''));
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Typeahead); //it connects an application to store
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

interface AppProps {
	icons: model.Icon[];
	value: string;
	dispatch: Dispatch<{}>;
	getIcons(value: string):void;
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const { icons, getIcons } = this.props;
		return (
			<div className="search-block-wrapper">
				<div className='search-block-inner '>
				  <SearchBlock
				  	onExternalUpdate={(text: string) => {getIcons(text)}}
				  />
				  <ItemsList
				  	items={icons}
				  />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	icons: state.data.icons,
	value: state.data.value
});

const mapDispatchToProps = dispatch => ({
	getIcons: (value: string) => {
		dispatch(requestIcons(value));

		findIcons(value).then((icons: model.Icon[]) => {
			dispatch(receiveIcons(icons));
		});
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //it connects an application to store
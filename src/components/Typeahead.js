import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBlock from './SearchBlock';
import ItemsList from './ItemsList';
import * as iconsActions from '../actions/iconsActions';

class Typeahead extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
            viewStatus: 'passive',
            isLoading: false
        };

		this.handleSearchBlockChange = this.handleSearchBlockChange.bind(this);
		this.handleSearchBlockBlur = this.handleSearchBlockBlur.bind(this);
		this.handleSearchBlockFocus = this.handleSearchBlockFocus.bind(this);
	}

	handleSearchBlockChange(event){
		let query = event.target.value;
		
		this.props.actions.findIcons(query)
			.then((icons) => {
                console.log("then");
            })
            .catch(error => {
                console.log("error");
            });
	}

	handleSearchBlockBlur(event){
		this.setState({ viewStatus: 'passive' })
	}

	handleSearchBlockFocus(event){
		this.setState({ viewStatus: 'active' })
	}

    render(){
        return (
			<div className="search-block-wrapper">
				<div className={'search-block-inner ' + this.state.viewStatus}>
				  <SearchBlock
				  	onChange={this.handleSearchBlockChange}
			  		onBlur={this.handleSearchBlockBlur}
			  		onFocus={this.handleSearchBlockFocus}
			  		isSearchQueryPending={this.props.isSearchQueryPending}
			  	  />
				  <ItemsList
				  	items={this.props.icons}
				  />
				</div>
			</div>
        );
    }
}

// Typeahead.propTypes = {
//     children: PropTypes.object.isRequired
// };

function mapStatesToProps(state, ownProps) {
	debugger;
    return {
        icons: state.icons,
        isSearchQueryPending: state.isSearchQueryPending
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(iconsActions, dispatch)
    };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Typeahead);
import * as React from 'react'

import {
  Item,
} from '../../reacttypeahead'

interface ItemsListProps {
	items?: any;
}

interface ItemsListState {
}

class ItemsList extends React.Component<ItemsListProps, ItemsListState> {
	constructor(props, context) {
		super(props, context); 

		this.state = {
	      items: this.props.items || ''
	    }; 
	}

	render() {
		const { items } = this.props;
		console.log("items");
		console.log(items);
		let itemsTplList = items.map(function(item, index) {
	        return (
	          <div className="item-wrapper" key={index}>
	            <Item item={item} />
	          </div>
	        )
	      })

		console.log(itemsTplList);

	    return(
	      <div className="items-list-block">
		    <div className="items-list-wrapper">
		      <div className="items-list-inner">
		        <div className="items-list">
		          {itemsTplList}
		        </div>
		      </div>
		    </div>
		  </div>
	    );
  	}
}


export default ItemsList; 
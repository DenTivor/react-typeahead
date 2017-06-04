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

	handleItemClick(e, value) {
		console.log("click");
	}

	render() {
		const { items } = this.props;

		// let itemsTplList = items.map(function(item, index) {
	 //        return (
	 //          <div className="item-wrapper"
	 //          	key={index}
  //       	  >
	 //            <Item
	 //            	item={item} 
	 //            	key={index}
	 //            />
	 //          </div>
	 //        )
	 //      })

	    return(
	      <div className="items-list-block">
		    <div className="items-list-wrapper">
		      <div className="items-list-inner">
		        <div className="items-list">
		          {items.map((item, index) => <Item item={item} key={index} />)}
		        </div>
		      </div>
		    </div>
		  </div>
	    );
  	}
}


export default ItemsList; 
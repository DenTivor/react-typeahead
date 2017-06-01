import React, {PropTypes} from 'react';
import Item from './Item';

const ItemsList = ({items}) => {
	// debugger;
	let itemsTplList = items.map(function(item, index) {
        return (
          <div className="item-wrapper" key={index}>
            <Item data={item} />
          </div>
        )
      })
	
	return (
		<div className="items-list-block">
		    <div className="items-list-wrapper">
		      <div className="items-list-inner">
		        <div className="items-list">
		          {itemsTplList}
		        </div>
		      </div>
		    </div>
		  </div>
	)
}



export default ItemsList;
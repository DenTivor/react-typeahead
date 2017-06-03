import * as React from 'react'

interface ItemProps {
	item?: any;
}

interface ItemState {
}

class Item extends React.Component<ItemProps, ItemState> {
	constructor(props, context) {
		super(props, context); 

		this.state = {
	      item: this.props.item || ''
	    }; 
	}

	render() {
		const {name, nickname, tweets, following, followers, text} = this.props.item;

	    return(
			<div className="item clearfix">
			  <div className="left-column pull-left">
			    <div className="profile-image"></div>
			  </div>
			  <div className="right-column pull-left">
			    <div className="top-block"><span className="name">{name}</span><span className="identification main-grey-color">{nickname}</span></div>
			    <div className="center-block"><span className="info">{text}</span></div>
			    <div className="bottom-block">
			      <div className="social-activity">
			        <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">{tweets}</span></div>
			        <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">{following}</span></div>
			        <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">{followers}</span></div>
			      </div>
			    </div>
			  </div>
			</div>
	    );
  	}
}


export default Item; 
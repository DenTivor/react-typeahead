import * as React from 'react';
import SearchInput from './SearchInput'

interface SearchBlockProps {
	initialFocusedInput: boolean;
	getIcons: (text: string) => any;
};

class SearchBlock extends React.Component<SearchBlockProps, void> {


	processSearch(text: string) {
		this.props.getIcons(text);
	}

	processFocus(isFocused: boolean) {
		
	}

	render() {
		return(
			<div className="search-block-inner">
			  <SearchInput
			  	value=''
			  	initialFocusedInput={this.props.initialFocusedInput}
			  	placeholder="Type to search icon..."
			  	onFocus={this.processFocus.bind(this)}
			  	processTypeaheadValue={this.processSearch.bind(this)}
			  />

			  <div className="items-list-block">
			    <div className="items-list-wrapper">
			      <div className="items-list-inner">
			        <div className="items-list">
			          <div className="item-wrapper">
			            <div className="item clearfix">
			              <div className="left-column pull-left">
			                <div className="profile-image"></div>
			              </div>
			              <div className="right-column pull-left">
			                <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
			                <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
			                <div className="bottom-block">
			                  <div className="social-activity">
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="item-wrapper">
			            <div className="item clearfix">
			              <div className="left-column pull-left">
			                <div className="profile-image"></div>
			              </div>
			              <div className="right-column pull-left">
			                <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
			                <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
			                <div className="bottom-block">
			                  <div className="social-activity">
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="item-wrapper">
			            <div className="item clearfix">
			              <div className="left-column pull-left">
			                <div className="profile-image"></div>
			              </div>
			              <div className="right-column pull-left">
			                <div className="top-block"><span className="name">User blue icon</span><span className="identification main-grey-color">@user_blue</span></div>
			                <div className="center-block"><span className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a lacinia bibendum! Neque morbi nisi mus convallis lectus: Vulputate justo etiam eros; Molestie proin porta auctor montes magna pellentesque?</span></div>
			                <div className="bottom-block">
			                  <div className="social-activity">
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Tweets:</span><span className="social-counter">42978</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Following:</span><span className="social-counter">4200</span></div>
			                    <div className="social-parameters"><span className="social-param-name main-grey-color">Followers:</span><span className="social-counter">8</span></div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default SearchBlock;
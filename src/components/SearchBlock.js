import React, {PropTypes} from 'react';

const SearchBlock =({onChange, onBlur, onFocus, isSearchQueryPending}) => {
    return (
		<div className="search-block">
			<h2>{isSearchQueryPending}</h2>
			<input className="search-input"
				onChange={onChange}
				onBlur={onBlur}
				onFocus={onFocus}
			/>
			<div className="loader-wrapper">
				<div className="loader">Loading</div>
			</div>
		</div>
	)
}

export default SearchBlock;

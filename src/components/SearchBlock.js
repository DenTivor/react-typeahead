import React, {PropTypes} from 'react';

const SearchBlock =({onChange, onBlur, onFocus}) => {
    return (
		<div className="search-block">
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

import * as React from 'react';
import Typeahead from './Typeahead'

class App extends React.Component<void, void> {
	render() {
		return(
			<div className="content">
				<div className="content-inner">
					<div className="central-part-wrapper">
						<div className="central-part">
							<Typeahead />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
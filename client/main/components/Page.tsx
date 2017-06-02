import * as React from 'react';
import App from './App'

class Page extends React.Component<void, void> {
	render() {
		return(
			<div className="content">
				<div className="content-inner">
					<div className="central-part-wrapper">
						<div className="central-part">
							<App />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Page;
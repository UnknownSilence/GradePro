import React from 'react';

class Titles extends React.Component {
	render() {
		return (
			<div>
				<h1 className="titleTag">GradePro</h1>
				<p className="titleTag">{this.props.district} Version</p>
			</div>
		);
	}
}

export default Titles;

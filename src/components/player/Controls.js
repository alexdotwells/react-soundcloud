import React from 'react';
class Controls extends React.Component {

  render() {
		let classNames;
		if (this.props.isPlaying == 'pause') {
			classNames = 'fa fa-fw fa-pause';
		} else {
			classNames = 'fa fa-fw fa-play';
		}

		return (
			<div className="controls">
				<div onClick={this.props.onClick} className="button">
					<i className={classNames}></i>
				</div>
			</div>
		)
	}
}

export default Controls;

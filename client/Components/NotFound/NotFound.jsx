NotFound = React.createClass({
	componentDidMount() {
		$('.about-section').addClass('fadeIn');
	},
	render() {
		return (
			<div className="about-wrapper">
				<div className="about-section">
					<p>You didn't mean to get here. Go <a href="/">home</a></p>
				</div>
			</div>
		)
	}
});
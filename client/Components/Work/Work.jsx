Work = React.createClass({
	componentDidMount() {
		$('.about-section').addClass('fadeIn');
	},
	render() {
		return (
			<div className="about-wrapper">
				<div className="about-section">
					<p>
						Full work coming soon, meanwhile read what I have been up to <a href="https://416serg.me/how-i-learned-to-code-in-meteor-how-you-can-hopefully-learn-too-a4cc0231d418" target="_blank">here</a>.
					</p>
				</div>
			</div>
		)
	}
});
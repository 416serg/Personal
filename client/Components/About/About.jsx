About = React.createClass({
	componentDidMount() {
		$('.about-section').addClass('fadeIn');
	},
	render() {
		return (
			<div className="about-wrapper">
				<div className="about-section">
					<p>
						I am a developer from Toronto. 
						My tech stack is <a href="https://www.meteor.com/" target="_blank">Meteor</a> and <a href="https://facebook.github.io/react/" target="_blank">React</a> but I dabble in other technologies too. 
						If you want me to teach you something or consult on your new amazing idea, <a href="/contact">let me know</a>.
					</p>
				</div>
			</div>
		)
	}
});
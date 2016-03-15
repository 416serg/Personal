Contact = React.createClass({
	componentDidMount() {
		$('.contact-section').addClass('fadeIn');
	},
	render() {
		return (
			<div className="contact-wrapper">
				<div className="contact-section">
					<p>
						<a href="https://www.facebook.com/sergiy.dybskiy" target="_blank"><i className="fa fa-fw fa-facebook" /></a>
						<a href="https://twitter.com/416serg" target="_blank"><i className="fa fa-fw fa-twitter" /></a>
						<a href="mailto:me@416serg.com?subject=What's up" target="_blank"><i className="fa fa-fw fa-envelope" /><br/></a>
						<a href="https://www.instagram.com/416serg/" target="_blank"><i className="fa fa-fw fa-instagram" /></a>
						<a href="https://www.producthunt.com/@416serg" target="_blank"><i className="fa fa-fw fa-product-hunt" /></a>
						<a href="https://medium.com/@416serg" target="_blank"><i className="fa fa-fw fa-medium" /></a>
					</p>
				</div>
			</div>
		)
	}
});
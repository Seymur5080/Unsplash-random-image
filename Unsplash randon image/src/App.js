import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			image: null,
			error: null,
		}

		fetch('https://source.unsplash.com/random')
			.then(response => {
				this.setState({ image: response.url });
			})
			.catch(error => {
				this.setState({ error: error.message });
			})
	}

	render() {
		console.log(this.state);
		if (this.state.image && !this.state.error) {
			return (
				<div>
					<div className="container">
						<div className="row">
							<div className="col-3 offset-3">
								<img src={this.state.image} alt="" />
							</div>
						</div>
					</div>
				</div>
			)
		} else if (!this.state.image && this.state.error) {
			return (
				<div>
					<div className="container">
						<div className="row">
							<div className="col-3 offset-3">
								<img src={this.state.image} alt=""/>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div>
					<h1>Loading...</h1>
				</div>
			)
		}

	}
}

export default App;
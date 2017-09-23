import React from 'react';


class SearchBar extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				text: this.props.text
			}
		}

		iChanged = (event) => {
			this.setState({
				text: event.target.value
			})

		}

		textAdded = () => {
			this.props.textAdded(this.state.text)
		}

		enterKey = (event) => {
			
			if(event.key==="Enter"){
				this.textAdded();
			}
			
		}

		render() {
			return (

					<div className="fullscreen-bg">

						<video loop autoPlay className="fullscreen-bg__video">	        
			        <source src="assets/Turntable.mp4" type="video/mp4"/>

						</video>
						<div className="incenter">
							<h3>Info o muzyce </h3>
							<input  type="text" value={this.state.text} onKeyUp={this.enterKey} onChange={this.iChanged}/>
						<button className="btn"  onClick={this.textAdded}>Click</button>
						</div>
					</div>

				)
		}

	}

export default SearchBar
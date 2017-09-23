import React from 'react';
	


class ArtistInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: []
		}
	}



	getData() {
			fetch(`https://api.discogs.com/artists/${this.props.params.id}`).then((response)=>{
			console.log(response)
			return response.json()
			}).then(data=>{
				this.setState({
					info: data
					

				});


			})
		}


	componentWillMount() {
		this.getData()
	}

	render() {
		return (
			<div>
			<h1 className="center-align">{this.state.info.name}</h1>	
			 <a href="{this.state.info.url}">Strona główna </a>
			<p>{this.state.info.profile}</p>
			<ul>
				{this.state.info.urls}
			</ul>
			</div>
		)
	}
}

export default ArtistInfo
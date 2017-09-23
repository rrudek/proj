import React from 'react';

class MasterInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: []
		}
	}



	getData() {
			fetch(`https://api.discogs.com/masters/${this.props.params.id}`).then((response)=>{
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

			<div className="center-align">
			<h1>{this.state.info.title}</h1>
			<p>Ilość na sprzedaż: {this.state.info.num_for_sale}</p>
			<p>Najniższa cena: {this.state.info.lowest_price} dolarów</p>
			<h1 className="center-align">{this.state.info.genre}</h1>	
			 <div>{this.props.params.id}</div>

			</div>
		)
	}
}

export default MasterInfo
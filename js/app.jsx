import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./searchbar.jsx";
import Artist from "./artist.jsx";
import Release from "./release.jsx";
import Master from "./master.jsx";


class App extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				haveData: false,
				artist: [],
				master: [],
				release: [],
				paginationA: [],
				text: ".",
				counter: 1,
				counterMaster: 1,
				counterRel: 1
			}
			
		}



		getData() {
			fetch(`https://api.discogs.com/database/search?q=${this.state.text}&type=master&page=${this.state.counterMaster}&per_page=12&key=ZjPiwITgZOuOAjLJiSwE&secret=HtxDWUUuJJnrYmhfAizcxokGzbgeeTKH`).then((response)=>{
			console.log(response)
			return response.json()
			}).then(data=>{
				console.log(data)
				this.setState({
					haveData: !!data && !!data.results && data.results.length>0,
					master: data.results
					

				});


			})
			fetch(`https://api.discogs.com/database/search?q=${this.state.text}&type=artist&page=${this.state.counter}&per_page=12&key=ZjPiwITgZOuOAjLJiSwE&secret=HtxDWUUuJJnrYmhfAizcxokGzbgeeTKH`).then((response)=>{
			return response.json()
			}).then(data=>{
				console.log(data.results)
				this.setState({
					haveData: !!data && !!data.results && data.results.length>0,
					artist: data.results
				});


			})
			fetch(`https://api.discogs.com/database/search?q=${this.state.text}&type=release&page=${this.state.counterRel}&per_page=12&key=ZjPiwITgZOuOAjLJiSwE&secret=HtxDWUUuJJnrYmhfAizcxokGzbgeeTKH`).then((response)=>{
			console.log(response)
				return response.json()
				}).then(data=>{
					this.setState({
						haveData: !!data && !!data.results && data.results.length>0,
					release: data.results
				});


			})

}

	componentDidMount() {
		if (this.state.text.length>0){
		this.getData()
	}
	}
	textAdded = (str) => {
		this.setState({
			text: str
		}, this.getData)
	}

	nextPage =() => {
		console.log(this.state.counter)
		this.setState({
			counter: this.state.counter + 1
		}, this.getData)
	}

	prevPage =() => {
		console.log(this.state.counter)
		this.setState({
			counter: this.state.counter - 1
		}, this.getData)
	}

	nextPageMaster =() => {
		console.log(this.state.counterMaster)
		this.setState({
			counterMaster: this.state.counterMaster + 1
		}, this.getData)
	}

	prevPageMaster =() => {
		console.log(this.state.counterRel)
				this.setState({
				counterMaster: this.state.counterMaster - 1
		}, this.getData)
		
	}

	nextPageRelease =() => {
		console.log(this.state.counterRel)
		this.setState({
			counterRel: this.state.counterRel + 1
		}, this.getData)
	}

	prevPageRelease =() => {
		console.log(this.state.counterRel)
				this.setState({
				counterRel: this.state.counterRel - 1
		}, this.getData)
		
	}



		render() {
			return this.state.haveData&&(
					<div>  
					<SearchBar text={this.state.text} textAdded={this.textAdded}/>
					<h3 className="center-align">Artists:</h3>
					<Artist type={this.state.artist} counter={this.state.counter} nextPage={this.nextPage} prevPage={this.prevPage}/>
					<h3 className="center-align">Masters:</h3>
					<Master type={this.state.master} counter={this.state.counterMaster} nextPage={this.nextPageMaster} prevPage={this.prevPageMaster}/>
					<h3 className="center-align">Releases:</h3>
					<Release type={this.state.release} counter={this.state.counterRel} nextPage={this.nextPageRelease} prevPage={this.prevPageRelease}/>
					</div>
				)
			
		}
	}

	export default App
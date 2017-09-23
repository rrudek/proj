import React from 'react';




class Master extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				counter: this.props.counter,
				type: this.props.type
			}
		}
		componentWillReceiveProps(nextProps) {
			if(nextProps.type !== this.state.type){
				this.setState({
					type: nextProps.type
				})
			}
		}


		moreInfo = (e, url) => {
			fetch(url).then((response)=>{
			return response.json()
			}).then(data =>{
				console.log(data)
			})
}

	nextPage =() => {
		this.props.nextPage()
	}

	prevPage = () => {
		this.props.prevPage()
	}
		render() {
    let content = this.state.type;
    let groupSize = 4;
    let rows = content.map((item) => {
        // map content to html elements
        return <div className="col s12 m6 l3" key={item.id}>
						<div className="card hoverable">
						<div className="card-image">
              <img src={item.thumb.length===0 ? "../assets/vinyl.png" : item.thumb} />
            </div>
            <div className="card-content">
            <span className="card-title">{item.title}</span>
            <div className="card-action">
              <a className="btn" href={"/#/master/" + item.id}>More Info</a>
            </div>
            </div>
            </div>
          </div>;
    }).reduce((r, element, index) => {
        // create element groups with size 3, result looks like:
        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
        index % groupSize === 0 && r.push([]);
        r[r.length - 1].push(element);
        return r;
    }, []).map((rowContent, index) => {
        // surround every group with 'row'
        return <div className="row" key={index}>{rowContent}</div>;
    });
    return <div>{rows}
    <div className="center-align">
    <button className="btn"onClick={this.prevPage}>Previous</button>
    <button className="btn" onClick={this.nextPage}>Next</button>
    </div>
					<div className="divider"></div></div>;
}
	}




	export default Master
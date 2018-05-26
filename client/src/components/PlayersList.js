import React from 'react';
import {BrowserRouter, Switch, Route, browserHistory, Redirect} from 'react-router-dom';
import Player from './Player';

class PlayersList extends React.Component {
	constructor() {
		super();		
		this.state = {
			players: [],
            isLoading: true,
            searchKey: "",
            pageCount: 0
        };
        this.players = [];
        this.handleChange = this.handleChange.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    
    handleChange(event) {
        var searchKey = event.target.value;
        var filteredPlayers = this.players.filter( (player) => {
            return player.Name.indexOf(searchKey) != -1
        });
        if (searchKey.length < 1){
            filteredPlayers = this.players;
        }
        this.setState({
            searchKey: searchKey,
            players: filteredPlayers
        });
    }
	
	componentDidMount() {
		var _this = this;
		fetch("/api/").then(res => res.json()).then( (response) => {
            let pageCount = Math.ceil(response.data.length / 10);
            _this.players = response.data;
            
            _this.setState({
				players: _this.players.slice(0, 10),
                isLoading: false,
                pageCount: pageCount
            });
		} );
    }
    
    handlePageClick(obj) {
        let currentPage = obj.selected;
        let nextPageStart = (currentPage * 10);
        let data = this.players.slice( nextPageStart, (nextPageStart + 10) );
        this.setState({
            players: data
        });
    }
	
	render() {
		return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label className="label">Search by Player name:</label>
                            <input type="text" className="form-control" name="teamName" vale={this.state.searchKey} onChange={this.handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.isLoading? <p>Loading...</p> : null}
                    {
                        this.state.players.map( (player) => {
                            return <Player key={player.Name} player={player} />
                        } )
                    }
                </div>
            </div>
        )
	}
	
}

export default PlayersList;
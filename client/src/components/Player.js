import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="col-md-4">
				<div className="well player">
                    <a href={"/players/" + this.props.player.Name}>
                        <div className="thumbnail ">
                            <h4>{this.props.player.Name}</h4>
                            <div className="caption">
                                <p>Country: {this.props.player.Nationality}</p>
                                <p>Club: {this.props.player.Club}</p>
                                <p>Rating: {this.props.player.Rating}</p>
                            </div>
                        </div>
                    </a>
                </div>
			</div>
        )
    }
}

export default Player;

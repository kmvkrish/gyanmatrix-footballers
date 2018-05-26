import React from 'react';

class PlayerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            player: undefined
        };
    }

    componentDidMount() {
        var _this = this;
        fetch(`/api/${this.props.match.params.player}`).then(res => res.json())
        .then((response) => {
            _this.setState({
                isLoading: false,
                player: response.data[0]
            });
            console.log(response);
        });
    }

    render() {
        return (
            <div>
            {
                this.state.isLoading
                ? <p>Lading...</p>
                : (
                    this.state.player != undefined
                    ? (
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">{this.state.player.Name}</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Country: {this.state.player.Nationality}</p>
                                    <p> Club / Position : {this.state.player.Club} / {this.state.player.Club_Position}</p>
                                    <p>Join Date: {this.state.player.Club_Joining}</p>
                                    <p>Contract: Expires on {this.state.player.Contract_Expiry}</p>
                                    <p>Birth Date / Age : { this.state.player.Birth_Date } / { this.state.player.Age } </p>
                                    <p>penalty Kicks Scored: {this.state.player.Penalties}</p>
                                    <p>Finishing: {this.state.player.Finishing}</p>
                                    <p>Rating: {this.state.player.Rating}</p>
                                </div>
                            </div>
                        </div>
                    )
                    : <p>Player not found</p>
                )
            }
            </div>
        )
    }
}

export default PlayerDetails;
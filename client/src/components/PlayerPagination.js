import React from 'React';

export default class PlayerPaginate extends React.Component {
    constructor(props) {
        super(props);
    }
   render() {
        return (
            <nav aria-label="navigation">
                <ul className="pagination">
                    <li>1</li>
                </ul>
            </nav>
        )
    }
}
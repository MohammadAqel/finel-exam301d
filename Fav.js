import React, { Component } from 'react'
import Home from './Home';
export class Fav extends Component {
    render() {
        return (
            
                <modal show={this.props.show} onHide={this.this.props.handleClass}>
                    <modal.Fav classButton>
                        <modal.Title>{this.props.modal.Title}</modal.Title>
                    </modal.Fav>
                    <button variant="secondary" onClick={this.props.handleClass}>
                        Add to fav
                    </button>
            </modal>
        )
    }
}
<Home/>
export default Fav;

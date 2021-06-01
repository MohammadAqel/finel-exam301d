import React, { Component } from 'react';
import Fav from './Fav';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClick: 0,
      show: false
    };
  }
  sumNumberOfClick = () => {
    this.setState({ numOfClick: this.state.numOfClick + 1 });
  }

  showPicture = () => {
    this.setState({ show: true }),
      this.setState({ numOfClick: this.state.numOfClick + 1 });
  }

  render() {
    return (
      <div>{
                <Card.img onClick={this.showPicture} variant="top" src={this.props.id} >
                <Card.Body>
                    <Card.Title>
                        {this.props.gander}
                    </Card.Title>
                    <Card.Text>
                      {this.props.name}
                    </Card.Text>
                </Card.Body>
                <Card/>
      }
        <SelecedPicture show={this.props.show}
          Title={this.props.gander}
          name={this.props.name}
          url={this.props.img}
        />
      </div>
    );
  }
}
<Fav />
export default Home;

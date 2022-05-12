import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './Hornedbeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  render() {
    // console.log(this.props);
    return (
      <Col>
        <Card 
        // style={{width: '18rem', margin: '10px', padding: '10px', borderRadius: '10px', borderColor: 'black', display: 'inline-block'}}

        // help from Cassie and Garfield (TA's)
        >
          <Card.Body>
            <Card.Img
            onClick={()=>this.props.openModal(this.props.description, this.props.url, this.props.title)}
              src={this.props.url}
              alt={this.props.title}
              title={this.props.title}
            />
            <Card.Title>
              {this.props.title}
            </Card.Title>
            <Card.Text>
              {this.state.likes} Like this? Click Here!❤️
            </Card.Text>
            <Button onClick={this.handleLikes}
            > CLICK ME

            </Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }






}
export default HornedBeast; 
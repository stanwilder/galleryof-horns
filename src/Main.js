import React from "react";
import HornedBeast from "./HornedBeast";
import { Row, Container } from 'react-bootstrap';
import './Main.css'

class Main extends React.Component {
  render() {
    let allBeast = this.props.data.map((beast, idx) => (


      <HornedBeast
        key={idx}
        title={beast.title}
        description={beast.description}
        url={beast.image_url}
        openModal={this.props.openModal}
      />

    ))

    return (

      <Container>
        <Row xs={1} md={3} lg={4}>
          {allBeast}
        </Row>
      </Container>



    )
  }
}



export default Main;
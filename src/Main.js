import React from "react";
import HornedBeast from "./HornedBeast";
import beastData from './data.json'
import { Row, Container} from 'react-bootstrap';

class Main extends React.Component {
  render() {
     let allBeast = beastData.map((beast, idx) => (
     
      <HornedBeast
      key = {idx} 
      title={beast.title}
      description={beast.description} 
      url={beast.image_url}
      />
    ))
  
    return(
      
      <Container>
        <Row xs={1} md={3} lg={4}>
        {allBeast}
        </Row>
        </Container>
      
        
        
        )
      }
  }


export default Main;
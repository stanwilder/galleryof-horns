import React from "react";
import Form from 'react-bootstrap/Form'


class Forms extends React.Component {
render() {
  return(
    <>
    <Form>
      <Form.Label>
        Number of Horns
      </Form.Label>
      <Form.Select name="select" onChange={this.props.handleSelect}>
        <option value="all">ALL</option>
        <option value="one">ONE</option>
        <option value="two">TWO</option>

      </Form.Select>
    </Form>
    </>
  )
}
}



export default Forms;

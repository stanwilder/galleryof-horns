import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return(
      <>
      <HornedBeast 
      title = {'Beast1'}
      description = {'this is a beast'}
      url = {'https://static.wikia.nocookie.net/necromancers/images/8/80/Giant_horned_beast_2.jpg'}
      />

      <HornedBeast 
      title = {'Beast2'}
      description = {'this is a beast'}
      url = {'https://static.wikia.nocookie.net/necromancers/images/8/80/Giant_horned_beast_2.jpg'}
      />
      </>
    )
  }
}

export default Main;
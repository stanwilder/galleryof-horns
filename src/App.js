import React from 'react'
import Main from './Main.js';
import Header from './Header.js'
import Footer from './Footer.js'
import beastData from './data.json'
import SelectedBeast from './SelectedBeast.js';
// import HornedBeast from './HornedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      img: '',
      description: ''

    }
  }
  openModal = (description, img, title) => {
    console.log(img)
    this.setState({
      showModal: true,
      title: title,
      img: img,
      description: description

    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }


  render() {

    return (
      <>
        <Header />

        <Main
          data={beastData}
          openModal={this.openModal}
        />
        <SelectedBeast
          title={this.state.title}
          img={this.state.img}
          description={this.state.description}
          showModal={this.state.showModal}
          hideModal={this.hideModal}

        />

        <Footer />

      </>

    )
  }
}
export default App;

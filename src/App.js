import React from 'react'
import Main from './Main.js';
import Header from './Header.js'
import Footer from './Footer.js'
import beastData from './data.json'
import SelectedBeast from './SelectedBeast.js';
import Forms from './Forms.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      img: '',
      description: '',
      beastData: beastData

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

  handleSelect = (e) => {
    let select = e.target.value;
    console.log(select);
    if (select === "one") {
      let odds = beastData.filter(number => number.horns === 1);
      console.log(odds);
      this.setState({ beastData: odds})
    } else if (select === "two") {
      let evens = beastData.filter(number => number.horns === 2);
      console.log(evens);
      this.setState({ beastData: evens})
    } else {
      this.setState({ beastData : beastData})
    }
       

  }


  render() {

    return (
      <>
        <Header />
        <Forms
        handleSelect={this.handleSelect}
        />

        <Main
          data={this.state.beastData}
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

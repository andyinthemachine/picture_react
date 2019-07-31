

import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
const _ = require("lodash")

class App extends Component {
  state = {
    pictures
  };

  shufflePictures = () => {
    this.setState({ pictures: _.shuffle(pictures)});
  }

 
  render() {
    return (
      <Wrapper>
        {this.state.pictures.map(picture => (
          <PictureCard
            shufflePictures={this.shufflePictures}
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;




import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures
  };

  removePicture = id => {
    const pictures = this.state.pictures.filter(picture => picture.id !== id);
    this.setState({ pictures });
  };

  render() {
    return (
      <Wrapper>
        {this.state.pictures.map(picture => (
          <PictureCard
            removePicture={this.removePicture}
            id={picture.id}
            key={picture.id}
            name={picture.name}
            image={picture.image}
            occupation={picture.occupation}
            location={picture.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


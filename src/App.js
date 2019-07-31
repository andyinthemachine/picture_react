

import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
const _ = require("lodash")

class App extends Component {
  state = {
    pictures,
  };

  shufflePictures = () => {
    this.setState({ pictures: _.shuffle(pictures) });
  }


  render() {
    return (
      <>
        <div class="jumbotron">
          <h3 class="display-4">Icelantic skis game</h3>
          <p class="lead">Try not to click the same skis twice!</p>
          <hr class="my-4"></hr>
          <span id="guessed">guessed</span>
          <span id="score">score</span>
          <span id="top-score">top score</span>
        </div>

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
      </>
    );
  }
}

export default App;




import React, { Component } from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";
import GameInfo from "./components/GameInfo";

const _ = require("lodash")

class App extends Component {
  state = {
    pictures,
    count: 0,
    high_count: 0,
    correct: true
  };

  reset_clicked = () => {
    this.setState({ pictures: this.state.pictures.map((item) => item.clicked = false) })
  }


  handleElementClick = (id) => {

    const newState = { ...this.state };

    let found = false;
    let i = 0;
    while (!found && i < this.state.pictures.length) {
      if (this.state.pictures[i].id === id) {
        found = true;
      }
      else
        i++;
    }

    if (this.state.pictures[i].clicked) {
      this.reset_clicked();
      newState.high_count = (Math.max(this.state.count, this.state.high_count));
      newState.count = 0;
      newState.correct = false;
    }
    else {
      newState.pictures[i].clicked = true;
      newState.count++;
      newState.correct = true;
    }

    newState.pictures = _.shuffle(pictures);
    this.setState(newState);
  }



  render() {
    return (
      <>
        <GameInfo correct={this.state.correct} count={this.state.count} high_count={this.state.high_count} />
        <Wrapper>
          {this.state.pictures.map(picture => (
            <PictureCard
              handleElementClick={this.handleElementClick}
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


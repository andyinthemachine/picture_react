import React from "react";


// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function GameInfo(props) {
    return (
        <div className="jumbotron">
            <h3 className="display-4">Icelantic skis game</h3>
            <p className="lead">Try not to click the same skis twice!</p>
            <hr className="my-4"></hr>
            <div className="card-body">
                <p className="card-text">
                    Answer: {props.correct ? "Unique!" : "Repeat!"} <br></br>
                    Score: {props.count}<br></br>
                    High Score: {props.high_count}</p>
            </div>
        </div>
    );
}

export default GameInfo;


import React from "react";

function GameInfo(props) {
    return (
        <div className="jumbotron">
            <h3 className="display-4">Icelantic skis game</h3>
            <p className="lead">Try not to click the same skis twice!</p>
            <hr className="my-4"></hr>
            <p className="card-text">{props.message} <br></br>Score: {props.count}<br></br>High Score: {props.high_count}</p>
        </div>
    );
}

export default GameInfo;

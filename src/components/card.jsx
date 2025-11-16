import React from "react";
import "./Card.css";
function Card(){
    return (
        <>
        <div className="parent">
            <div className="card">
                <img src="https://i.pinimg.com/1200x/2b/91/8d/2b918d8fce3d6edbe5123f946682ae17.jpg" alt="Placeholder" />
                <h3>Hedding</h3>
                <div className="center">
                    <p>Some text</p>
                </div>
                <div className="bottom">
                    <p>Some text</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
import React from "react";
import './CardMain.css';

function CardMain() {
    return (
        <div>
           <div className="cardmain-header">
             <p>Best for you</p>
             <h1>shop by notes</h1>
           </div>
        <div className="cardmain-container">
            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img1"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Woody</h1>
                </div>
            </div>

            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img2"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Floral</h1>
                </div>
            </div>

            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img3"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Fruity</h1>
                </div>
            </div>

            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img4"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Fresh</h1>
                </div>
            </div>

            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img5"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Sweet</h1>
                </div>
            </div>

            <div className="cardmain">
                <div className="cardmain-item">
                    <div className="cardmain-category cardmain-img6"></div>
                </div>
                <div className="cardmain-text">
                    <h1>Lavender</h1>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CardMain;

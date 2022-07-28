import React, { Component } from "react";
import "../css/Productos.css";
import IMG from "../imagenes/nike1.jpg";
import IMG1 from "../imagenes/nike2.jpg";
import IMG2 from "../imagenes/nike3.jpg";

export const Productos = () => {
  
    return (
      <>
  
        <div className="productos">
          <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={IMG} alt="img" />
                </div>
            </a>
            <div className="producto__footer">
              <h1>Nike Pegasus</h1>
              <p> Running</p>
              <p className="price">$400</p>
            </div>
            <div className="buttom">
              <button className="btn">Agregar al carrito</button>
              <div>
                <a href="#" className="bnt">
                  Detalles
                </a>
              </div>
            </div>
          </div>
          <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={IMG1} alt="img" />
                </div>
            </a>
            <div className="producto__footer">
              <h1>Nike Uomo</h1>
              <p>Running</p>
              <p className="price">$230</p>
            </div>
            <div className="buttom">
              <button className="btn">Agregar al carrito</button>
              <div>
                <a href="#" className="bnt">
                  Detalles
                </a>
              </div>
            </div>
          </div>
          <div className="producto">
            <a href="#">
              <div className="producto__img">
                <img src={IMG2} alt="img" />
                </div>
            </a>
            <div className="producto__footer">
              <h1>Nike Tanjun</h1>
              <p> Running</p>
              <p className="price">$150</p>
            </div>
            <div className="buttom">
              <button className="btn">Agregar al carrito</button>
              <div>
                <a href="#" className="bnt">
                  Detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }


export default Productos;

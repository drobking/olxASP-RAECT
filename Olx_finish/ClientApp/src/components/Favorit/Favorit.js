import React, { Component } from 'react';

export class Favorit extends Component {
  render () {
    return (
      <div className="d-flex justify-content-center">
        <div className="card col-3 mr-1" >
          <img className="card-img-top p-3" alt="Card image cap" src="./photo/phone.png"/>
          <hr/>
          <div className="card-body">
            <h5 className="card-title">Iphone X </h5>
            <p className="card-text">12300 грн</p>
            <a className="btn btn-primary text-white">Переглянути</a>
          </div>
        </div>
        <div className="card col-3 mr-1">
          <img className="card-img-top p-3"  alt="Card image cap" src="./photo/phone.png"/>
          <hr/>
          <div className="card-body">
            <h5 className="card-title">Iphone X </h5>
            <p className="card-text">12300 грн</p>
            <a className="btn btn-primary text-white">Переглянути</a>
          </div>
        </div>
        <div className="card col-3 mr-1">
          <img className="card-img-top p-3" alt="Card image cap" src="./photo/phone.png"/>
          <hr/>
          <div className="card-body">
            <h5 className="card-title">Iphone X </h5>
            <p className="card-text">12300 грн</p>
            <a className="btn btn-primary text-white">Переглянути</a>
          </div>
        </div>
        <div className="card col-3">
          <img className="card-img-top p-3"  alt="Card image cap" src="./photo/phone.png"/>
          <hr/>
          <div className="card-body">
            <h5 className="card-title">Iphone X </h5>
            <p className="card-text">12300 грн</p>
            <a className="btn btn-primary text-white">Переглянути</a>
          </div>
        </div>
      </div>
    );
  }
}

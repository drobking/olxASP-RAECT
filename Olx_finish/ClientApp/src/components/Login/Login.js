import React, { Component } from 'react';
import jwt_decode from "jwt-decode";

export class Login extends Component {
    state = {
        email: '' ,
        pass:'',
        result: {
                    token:'',
                    status:0,
                    message:''
       } 
      }

    onchangeEmail=(e)=>{
        console.log(e.target.value);
        this.setState({email: e.target.value});
    }
    onchangePass=(e)=>{
        console.log(e.target.value);
        this.setState({pass: e.target.value});
    }
    onclick=()=>{

       
          fetch('https://localhost:44318/api/Auth/loginUser',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Email:this.state.email,Password:this.state.pass })
          })
          .then(response => response.json())
          .then(data => this.setState({result: data}))
          .then(console.log(this.state.result));
            console.log(jwt_decode(this.state.result.token));
                // .then(response => response.json())
                // .then(data => this.setState({ postId: data.id }));
    }
  render () {
    return (
      <div className="container">
      <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
              <div className="row">
                  <div className="col-lg-6 col-md-8 mx-auto">
                      <div className="card rounded shadow shadow-sm">
                          <div className="card-header">
                              <h3 className="mb-0">Увійти</h3>
                          </div>
                          <div className="card-body">
                              <div className="form">
                                  <div className="form-group">
                                      <label>Email</label>
                                      <input type="text" onChange={this.onchangeEmail} className="form-control form-control-lg rounded-0"  />
                                      <div className="invalid-feedback">Oops, you missed this one.</div>
                                  </div>
                                  <div className="form-group">
                                      <label>Пароль</label>
                                      <input type="password"onChange={this.onchangePass} className="form-control form-control-lg rounded-0"></input>
                                      <div className="invalid-feedback">Enter your password too!</div>
                                  </div>
                                  <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="text-center">
                                                <button onClick={this.onclick} className="btn btn-primary mr-1">Увійти</button>
                                                <button  className="btn btn-primary ">Зареєструватись</button>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}
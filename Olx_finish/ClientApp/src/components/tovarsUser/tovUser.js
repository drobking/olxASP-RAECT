import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class TovarsUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tovars: []
        };
    }
    
    componentDidMount() {
        fetch('https://localhost:44318/api/Olx/TovarUser?userName='+this.props.match.params.user)
        .then(response => response.json())
        .then(tovars => {
            console.log('---server reesponse---', tovars);
            this.setState({ tovars: tovars })
             });
    } 

    render () {
        console.log(this.props.match.params.user);
        const tovars = this.state.tovars;
        const listItems = tovars.map((tov) => {
        const URL = '/details/';
                const El = <>
                                <div className="col-2">
                                    <img className="img-thumbnail" src="./photo/phone.png" alt="qwerty"/>
                                </div>  
                                <div className="col-10">
                                <NavLink type="text" className="btn bg-info text-white" tag={Link} to={URL+tov.id}>
                                    <button className="text-primary bg-light bt txt">{tov.name}</button>
                                </NavLink>
                                    <p>{tov.description}</p>
                                    <p className="display-4">{tov.cost} грн</p>
                                </div>
                                <hr></hr>
                            </>
                return El; 
            }
        );
    return (
        <>
            <div className="row">
               {listItems}
            </div>
        </>
    );
  }
}
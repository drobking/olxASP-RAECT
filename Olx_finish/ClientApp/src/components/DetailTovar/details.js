import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import './details.css';

export class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tovar: 0
        };
    }
    
    componentDidMount() {
        fetch('https://localhost:44318/api/Olx/TovarForID?id='+this.props.match.params.ID)
        .then(response => response.json())
        .then(tovar => {
            this.setState({ tovar: tovar })
             });
    } 

    render () {
        const URL = '/tovUser/';
        const tovar1 = this.state.tovar;
        return (
            <>
            <div className="d-flex">
                    <div className="col-8">
                        <img className="img-thumbnail" src="./photo/phone.png" alt="qwerty"/>
                    </div>
                    <div className="col-4">
                        <div className="col-12 bg-info text-light text-center p-3">
                            <p className="bg-light text-primary display-4 br-r">{tovar1.name}</p>
                            <p className="bg-light text-primary txt">{tovar1.categoryName}</p>
                            <p className="bg-light text-primary txt">{tovar1.description}</p>
                            <p className="bg-light text-primary txt">{tovar1.cost} грн</p>
                            <p className="bg-light text-primary txt">Автор: {tovar1.userName}</p>
                            <NavLink type="button" className="btn bg-info text-white" tag={Link} to={URL+tovar1.userName}>
                                <button className="text-primary bg-light bt txt">Інші оголошення автора</button>
                            </NavLink>
                        </div>
                    </div>
            </div>
            </>


    );
  }
}
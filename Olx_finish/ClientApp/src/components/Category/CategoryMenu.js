import React, { Component } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class CategoryMenu extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          categories: [],
        };
      }
     
    componentDidMount() {
        fetch('https://localhost:44318/api/Olx/')
        .then(response => response.json())
        .then(categories => {
            console.log('---server reesponse---', categories);
            this.setState({ categories: categories })
             });
    }

    render()
    {
        const URL = `/tovarsListCat/`;
        const categories = this.state.categories;
        const listItems = categories.map((cat) => {
                const El = <div key={cat.id}  className="d-flex justify-content-between flex-column col-2 mr-2 bg-info mt-4 rounded">
                                <img src={"/photo/"+cat.image} className="img-fluid p-3" alt="qwerty"/>
                                <NavLink type="button" className="btn bg-info text-white" tag={Link} to={URL+cat.name}>
                                    <p  className="text-center text-white">{cat.name}</p>   
                                </NavLink>
                            </div>
                return El; 
            }
        );
        return (<>
                    <div className="row d-flex justify-content-center">
                        <div className="d-flex justify-content-center">
                            {listItems}
                        </div>
                    </div>
                </>
        );
    }
};
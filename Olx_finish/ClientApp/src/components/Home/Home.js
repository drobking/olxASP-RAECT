import React, { Component } from 'react';
import {CategoryMenu} from '../Category/CategoryMenu.js'
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;
  state = {
    find: '' 
  }

  onChange = (e)=>{
    console.log(e.target.value);
    this.setState({find: e.target.value});
  }

  render () {
    const {find} = this.state;
    const URL = `/tovarsList/${find}`;
    return (
      <div>
        <div className="input-group md-form form-sm form-1 pl-0">
          <input id="searchInp" onChange={this.onChange} className="form-control my-0 py-1" type="text" placeholder="Пошук" aria-label="Search" value={find}/>
          <NavLink type="button" className="btn bg-info text-white" tag={Link} to={URL}>Пошук</NavLink>
        </div>
          <CategoryMenu></CategoryMenu>
      </div>
    );
  }
}

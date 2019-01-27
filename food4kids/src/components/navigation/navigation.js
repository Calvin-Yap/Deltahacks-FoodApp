import React from 'react';
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './navigation.css';
class Navigation extends React.Component {
  render(){
    return (
      <div className="nav">
      <img className="brand" alt="brand"src="https://www.jne.ca/wp-content/uploads/2018/01/Food4Kids-Logo-Hamilton-Halton-e1516286925688.png"/>
      <a className="normal" href="">How it Works</a>
		  <div class="dropdown">
			<a className="normal" href="">Products</a>
		  	<div class="dropdown-content">
		    <a href="#">Produce</a>
		    <hr className="bar"></hr>
		    <a href="#">Canned Goods</a>
		    <a href="#">Snacks</a>
		  	</div>
			</div>
		<a className="normal" href="">Learn More</a>
		<a className="normal" href="">Gallery</a>
      <a className="normal" href=""><FontAwesomeIcon  icon={['fas', 'shopping-bag']} size="xs" />  Bag</a>

   
      </div>
    );
  }
}

export default Navigation;
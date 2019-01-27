import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation/navigation";
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMousePointer, faAppleAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons';
library.add(faMousePointer, faAppleAlt,faSmile,faShoppingBag);


class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:true,
    };
    return (
      <div>
      <ScrollUpButton className="arrow" />
      <Navigation/>
          <img className="big" alt="produce" src="https://i.imgur.com/epUZYvG.jpg"/>
          <div className="bigtext">
          <h1>"Providing Children with the Tools to Thrive and Grow"</h1>
          <h4> There is more work to be done. We need your support and there are so many ways to help </h4>
          <Button color="danger">Being Shopping</Button>{' '}
          </div>

          <div className="infoTable">
          <h1 className="textcenter">How it Works</h1>
          <h5 className="textcenter">Donations made simple</h5>
          <div className="shift">
          <Container>

          <Row>

          <Col xs="6" sm="4">
          <FontAwesomeIcon className="space"  icon={['fas', 'mouse-pointer']} size="3x" />
          <h6>
          Simple to Add Items</h6>
          <p>select the items that you want to donate and checkout whenever you are ready. </p>
          </Col>
          <Col xs="6" sm="4">
          <FontAwesomeIcon className="space1" icon={['fas', 'apple-alt']} size="3x" />
          <h6>Freshness Guaranteed</h6>
          <p>
          Once the order is received, a Food4Kids representative will purchase the items from a local vendor.
          </p>
          </Col>
          <Col sm="4">
          <FontAwesomeIcon className="space2" icon={['far', 'smile']} size="3x" />
          <h6>Delivering Smiles Daily</h6>
          <p>
          Once the items are organized, the bags will be assembled and delivered to the children.
          </p>
          </Col>
        </Row>
        </Container>
        </div>  
          </div>
          <div className="titleBar">
          <h1>Shopping-List</h1>
          <p>The children in the Food4Kids Program receive individual, healthy packages of
food. The following are the types of products we welcome as donations:
</p>
          </div>

          <div className="row">
            <div className="column">
              <h1 className="center">Produce</h1>
               
              <img className="images" src="https://images.unsplash.com/photo-1452948491233-ad8a1ed01085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="Snow"/>
            </div>
            <div className="column">
            <h1 className="center1">Canned Goods</h1>
              <img className="images" src="https://images.unsplash.com/photo-1536755622971-7987b5104475?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Forest"/>
            </div>
            <div className="column">
            <h1 className="center2">Snacks</h1>
             
              <img className="images" src="https://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/WGC-Granola-Bars-copy.jpg" alt="Mountains" />
            </div>
          </div>

          <div className="sectionG">
          <h1> Produce </h1>
    <Slider{...settings}>
    <div className="box">
    <img className="groceries" src="http://www.manzanaproductsco.com/wp-content/uploads/2013/11/jonathan.png" />
        <h1 className="textcenter">Apples (Assorted)</h1>
    <p className="textcenter">$5.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="https://www.summercitrus.com/wp-content/uploads/2016/06/product-navel-2-800x442.png" />
        <h1 className="textcenter">Oranges</h1>
    <p className="textcenter">$6.99/Bag</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries" src="https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png" />
       <h1 className="textcenter">Cucumbers</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries" src="http://vegetablepuree.com/wp-content/uploads/2017/03/PEPPERS.png" />
    <h1 className="textcenter">Bell Peppers</h1>
    <p className="textcenter">$4.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="http://www.proto.gr/sites/www.proto.gr/files/styles/colorbox/public/images/fruits/plum.png?itok=NigJGGp6" />
    <h1 className="textcenter">Plums</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

  
    </Slider>
          </div>

                  <div className="sectionB">
          <h1>Canned Goods</h1>
    <Slider{...settings}>
    <div className="box">
    <img className="groceries" src="http://www.manzanaproductsco.com/wp-content/uploads/2013/11/jonathan.png" />
        <h1 className="textcenter">Apples (Assorted)</h1>
    <p className="textcenter">$5.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="https://www.summercitrus.com/wp-content/uploads/2016/06/product-navel-2-800x442.png" />
        <h1 className="textcenter">Oranges</h1>
    <p className="textcenter">$6.99/Bag</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries" src="https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png" />
       <h1 className="textcenter">Cucumbers</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries" src="http://vegetablepuree.com/wp-content/uploads/2017/03/PEPPERS.png" />
    <h1 className="textcenter">Bell Peppers</h1>
    <p className="textcenter">$4.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="http://www.proto.gr/sites/www.proto.gr/files/styles/colorbox/public/images/fruits/plum.png?itok=NigJGGp6" />
    <h1 className="textcenter">Plums</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

  
    </Slider>
          </div>

        
                  <div className="sectionO">
          <h1>Snacks</h1>
    <Slider{...settings}>
    <div className="box">
    <img className="groceries" src="http://www.manzanaproductsco.com/wp-content/uploads/2013/11/jonathan.png" />
        <h1 className="textcenter">Apples (Assorted)</h1>
    <p className="textcenter">$5.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="https://www.summercitrus.com/wp-content/uploads/2016/06/product-navel-2-800x442.png" />
        <h1 className="textcenter">Oranges</h1>
    <p className="textcenter">$6.99/Bag</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries" src="https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png" />
       <h1 className="textcenter">Cucumbers</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries" src="http://vegetablepuree.com/wp-content/uploads/2017/03/PEPPERS.png" />
    <h1 className="textcenter">Bell Peppers</h1>
    <p className="textcenter">$4.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries" src="http://www.proto.gr/sites/www.proto.gr/files/styles/colorbox/public/images/fruits/plum.png?itok=NigJGGp6" />
    <h1 className="textcenter">Plums</h1>
    <p className="textcenter">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

  
    </Slider>
          </div>

          <footer className="end">
            <h1> project made from scratch using ReactJS and Aloglia </h1>
            <h1> Coded by Calvin Yap and Designed by Ryan Huang</h1>
          </footer>

      </div>
    );
  }
}

export default App;

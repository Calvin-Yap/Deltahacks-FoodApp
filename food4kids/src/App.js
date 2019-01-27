import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation/navigation";
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMousePointer, faAppleAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll'
library.add(faMousePointer, faAppleAlt,faSmile,faShoppingBag);


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
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
         <AnchorLink offset='170' href='#beginshop'> <Button color="danger">Being Shopping</Button>{' '}</AnchorLink>
              

          </div>

           <section id='howitworks'>
              </section>
          <div className="infoTable">
          <h1 className="textcenter">How it Works</h1>
          <h5 className="textcenter1">Donations made simple</h5>
          <div className="shift">
          <Container>

          <Row>

          <Col xs="6" sm="4">
          <FontAwesomeIcon className="space"  icon={['fas', 'mouse-pointer']} size="3x" />
          <h6 className="textcenter2">
          Simple to Add Items</h6>
          <p>select the items that you want to donate and checkout whenever you are ready. </p>
          </Col>
          <Col xs="6" sm="4">
          <FontAwesomeIcon className="space1" icon={['fas', 'apple-alt']} size="3x" />
          <h6 className="textcenter2">Freshness Guaranteed</h6>
          <p>
          Once the order is received, a Food4Kids representative will purchase the items from a local vendor.
          </p>
          </Col>
          <Col sm="4">
          <FontAwesomeIcon className="space2" icon={['far', 'smile']} size="3x" />
          <h6 className="textcenter2">Delivering Smiles Daily</h6>
          <p>
          Once the items are organized, the bags will be assembled and delivered to the children.
          </p>
          </Col>
        </Row>
        </Container>
        </div>  
          </div>
              <section id='beginshop'>
              </section>
              <section id='products'>
              </section>
          <div className="titleBar">
          <h1 className="fira">Shopping-List</h1>
          <p className="firaplain">The children in the Food4Kids Program receive individual, healthy packages of
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
 <section id='produce'>
              </section>
          <div className="sectionG">


          <h1 className="firaCart"> Produce </h1>
    <Slider{...settings}>
     <div className="box">
    <img className="groceries"alt="food" src="http://www.manzanaproductsco.com/wp-content/uploads/2013/11/jonathan.png" />
        <h1 className="textcenter3">Apples (assorted)</h1>
    <p className="textcenter4">$5.99/Bag</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries"alt="food" src="https://www.summercitrus.com/wp-content/uploads/2016/06/product-navel-2-800x442.png" />
        <h1 className="textcenter3">Oranges</h1>
    <p className="textcenter4">$6.99/Bag</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries"alt="food" src="https://mucci-production-user-uploads-bucket.s3.amazonaws.com/images/Product-IMG_MiniCucumbers-rev2.original.png" />
       <h1 className="textcenter3">Cucumbers</h1>
    <p className="textcenter4">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries"alt="food" src="http://vegetablepuree.com/wp-content/uploads/2017/03/PEPPERS.png" />
    <h1 className="textcenter3">Bell Peppers</h1>
    <p className="textcenter4">$4.99/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries"alt="food" src="http://www.proto.gr/sites/www.proto.gr/files/styles/colorbox/public/images/fruits/plum.png?itok=NigJGGp6" />
    <h1 className="textcenter3">Plums</h1>
    <p className="textcenter4">$1.99/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

  
    </Slider>
          </div>
 <section id='canned'>
              </section>
                  <div className="sectionB">

          <h1 className="firaCart">Canned Goods</h1>
    <Slider{...settings}>
    <div className="box">
    <img className="groceries2" alt="food"src="https://www.sealord.com/media/1744/rte-shelf-tuna-chunky-style-spring-water-3-cans.png?anchor=center&mode=crop&width=640&format=png&slimmage=true&quality=90&rnd=130997566620000000" />
        <h1 className="textcenter3">Tuna (Canned)</h1>
    <p className="textcenter4">$1.47/Can</p>
    <Button  className="cart"alt="food" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries2" alt="food"src="https://www.healthychoice.com/sites/g/files/qyyrlu206/files/images/products/chicken-noodle-87984.png" />
        <h1 className="textcenter3">Vegetable Beef Soup</h1>
    <p className="textcenter4">$1.17/Can</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries2"alt="food" src="https://www.healthychoice.com/sites/g/files/qyyrlu206/files/images/products/country-vegetable-07005.png" />
       <h1 className="textcenter3">Vegetable Soup </h1>
    <p className="textcenter4">$1.17/Can</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries1"alt="food" src="https://www.campbellsoup.ca/wp-content/uploads/2018/05/tomato.png" />
    <h1 className="textcenter3">Tomato Soup </h1>
    <p className="textcenter4">$1.50/Can</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries1"alt="food" src="https://www.campbellsoup.ca/wp-content/uploads/2018/05/Cream-Of-Mushroom.png" />
    <h1 className="textcenter3">Cream Of Mushroom</h1>
    <p className="textcenter4">$1.50/Can</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
     <div className="box">
    <img className="groceries2" alt="food"src="http://www.hormel.com/CMSPages/GetFile.aspx?guid=66e5cc58-f643-4d86-8269-1cddfef84b80" />
    <h1 className="textcenter3">Vegetarian Chili</h1>
    <p className="textcenter4">$1.20/Can</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
       <div className="box">
    <img className="groceries2" alt="food"src="https://www.chefboyardee.com/sites/g/files/qyyrlu321/files/images/products/jumbo-spaghetti-meatballs-95757.png" />
    <h1 className="textcenter3">Spaghetti</h1>
    <p className="textcenter4">$1.99/Can</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>       
    <div className="box">
    <img className="groceries2"alt="food" src="http://www.delmonteeurope.com/media/europe/products/food-world/prepared%20canned%20vegetables/new%20veggies/Del%20Monte%20baked%20beans.png" />
    <h1 className="textcenter3">Beans & Tomatoes</h1>
    <p className="textcenter4">$1.99/Can</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    </Slider>
          </div>
                  <section id='snacks'>
              </section>
        
                  <div className="sectionO">

          <h1 className="firaCart">Snacks</h1>
    <Slider{...settings}>
    <div className="box">
    <img className="groceries2"alt="food" src="https://www.quakeroats.ca/sites/quakeroats.ca/files/M250295_FN_OrdFrt_5ct_Eng.png" />
        <h3 className="textcenter3">Granola Bars</h3>
    <p className="textcenter4">$2.50/Box</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    <img className="groceries2"alt="food" src="https://www.annies.com/wp-content/uploads/2014/06/AnimalCookie-Thumbnail.png"/>
        <h1 className="textcenter3">Animal Cookies </h1>
    <p className="textcenter4">50¢/Pack</p>
    <Button className="cart"color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">

    <img className="groceries2"alt="food" src="https://leclerc-business-site-production.s3.amazonaws.com/uploads/2018/04/18/20/47/42/a55ae823-acca-42df-8fc7-c789af0c49c2/box-front-asset-en.png" />
       <h1 className="textcenter3">Oatmeal Cookies </h1>
    <p className="textcenter4">50¢/Each</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>
    <div className="box">
    
    <img className="groceries2"alt="food" src="https://www.jeancoutu.com/catalog-images/541003/viewer/0/goldfish-goldfish-cheddar-200-gr.png" />
    <h1 className="textcenter3">Goldfish</h1>
    <p className="textcenter4">$1.97/Bag</p>
    <Button  className="cart" color="success">Add to Cart</Button>{' '}
    </div>

    <div className="box">
    <img className="groceries3" alt="food" src="https://www.delmonte.com/sites/default/files/100JuiceProductCategoryPeaches.png" />
    <h1 className="textcenter3">Fruit Cups</h1>
    <p className="textcenter4">$6.26/3 Pack</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

    <div className="box">
    <img className="groceries2" alt="food" src="http://foodservice.treetop.com/Assets/Images/Thumbnails/Applesauce/th-no-sugar-added-applesauce-cup-4pt5oz.png" />
    <h1 className="textcenter3">Apple sauce</h1>
    <p className="textcenter4">$6.26/3 Pack</p>
    <Button className="cart" color="success">Add to Cart</Button>{' '}
    </div>

  
    </Slider>
          </div>

          <footer className="end">
            <p> project made from scratch using ReactJS and Aloglia </p>
            <p> Coded by Calvin Yap and Designed by Ryan Huang</p>
          </footer>

      </div>
    );
  }
}

export default App;

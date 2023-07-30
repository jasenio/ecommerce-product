import './styles/App.css';
import {useState, createContext, useEffect} from "react";
import {NavBar} from './NavBar';
import {ImageSlider} from './ImageSlider';
import {ImageSelector} from './ImageSelector';
import {ItemInfo} from './ItemInfo';
import {BuyItem} from './BuyItem';
import images from './image';
import {useMediaQuery} from 'react-responsive';

export const CartContext = createContext();
function App() {
  const mobileQuery =  useMediaQuery({
    query: '(max-width: 1100px)'
  })

  const [cartItems, setCartItems] = useState([{
    name: "Fall Limited Edition Sneakers",
    cost: 250.00,
    discount: .5,
    count: 3,
    pic: images.thumbnail1,
    company: 'Sneaker Company',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
  }, {
    name: "Fall Limited Edition Sneakers1",
    cost: 100.00,
    discount: 0,
    count: 4,
    pic: images.thumbnail2,
    company: 'Sneaker Company',
    description: "bruh"
  }
, {
    name: "Fall Limited Edition Sneakers2",
    cost: 105.00,
    discount: 0,
    count: 1,
    pic: images.thumbnail3,
    company: 'Sneaker Company',
    description: "y u reading"

  }]);
  const items = [{
    name: "Fall Limited Edition Sneakers",
    cost: 250.00,
    discount: .5,
    count: 0,
    pic: images.thumbnail1,
    company: 'Sneaker Company',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
  }, {
    name: "Fall Limited Edition Sneakers1",
    cost: 100.00,
    discount: 0,
    count: 0,
    pic: images.thumbnail2,
    company: 'Sneaker Company',
    description: "bruh"
  }
, {
    name: "Fall Limited Edition Sneakers2",
    cost: 105.00,
    discount: 0,
    count: 0,
    pic: images.thumbnail3,
    company: 'Sneaker Company',
    description: "y u reading"
  }
  ];
  return (
    <CartContext.Provider value = {{cartItems, setCartItems}}>
      <div className="container">
        <NavBar />
        {mobileQuery &&  <ImageSlider />}
        {!mobileQuery && <ImageSelector />}
        <div className = "itemDesc">
          <ItemInfo item = {items[0]}/>
          <BuyItem items = {items} index = {0}/>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;

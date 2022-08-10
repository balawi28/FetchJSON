import React from 'react';
import BurgerBreadBottom from '../../icons/burger-bread-bottom.svg';
import BurgerBreadTop from '../../icons/burger-bread-top.svg';
import BurgerCheese from '../../icons/burger-cheese.svg';
import BurgerLeaf from '../../icons/burger-leaf.svg';
import BurgerLettuce from '../../icons/burger-lettuce.svg';
import BurgerMeatBeef from '../../icons/burger-meat-beef.svg';
import BurgerMushroom from '../../icons/burger-mushroom.svg';
import BurgerOnion from '../../icons/burger-onion.svg';
import BurgerTomato from '../../icons/burger-tomato.svg';
import BurgerElement from '../BurgerElement/BurgerElement';
import './Burger.css';

export default function Burger() {
  return (
    <div className='Burger'>
      <BurgerElement
        image={BurgerBreadBottom}
        text='Bread: Base Price'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerLeaf}
        text='Leaf: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerMeatBeef}
        text='Beef: Base Price'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerCheese}
        text='Cheese: 5₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerTomato}
        text='Tomato: 2₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerOnion}
        text='Onion: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerLettuce}
        text='Lettuce: 1₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerMushroom}
        text='Mushroom: 2₪'
        removable={true}
      ></BurgerElement>

      <BurgerElement
        image={BurgerBreadTop}
        text='Bread: Base Price'
        removable={true}
      ></BurgerElement>
    </div>
  );
}

import './cart-dropdown.styles.scss';

import React from 'react'
import Button from '../button/button.component';

function CartDropDown() {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'></div>
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown
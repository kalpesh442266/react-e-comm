import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../../asssets/crown.svg'
import CartDropDown from '../../cart-dropdown/cart-dropdown.component';
import CartIcon from '../../cart-icon/cart-icon.component';
import { UserContext } from '../../contexts/user.context';

import { signOut } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
import { CartContext } from '../../contexts/cart.context';

function Navigation() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    // console.log(currentUser);
    const signOutHandler = () => {
        signOut();
        setCurrentUser(null);
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={'/'}>
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to={'/shop'}>
                        SHOP
                    </Link>
                    {
                        currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : (<Link className='nav-link' to={'/auth'}>
                            SIGN IN
                        </Link>)
                    }
                    <CartIcon />

                </div>
            </div>
            {isCartOpen && <CartDropDown />}
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems, selectCartHidden} from '../../../redux/cart/cart.selectors';

import {toggleCartHidden} from "../../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';
import {withRouter} from "react-router-dom";

const CartDropdown = ({cartItems, hidden, history, dispatch}) => {
    const node = useRef();

    const handleClickOutside = e => {
        console.log("clicking anywhere");
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        dispatch(toggleCartHidden());
    };

    useEffect(() => {
        if (!hidden) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [hidden]);

    return (
        <div ref={node} className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem}/>
                        ))
                        : (<span className='empty-message'>Your Cart is Empty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }
            }>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    hidden: selectCartHidden
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
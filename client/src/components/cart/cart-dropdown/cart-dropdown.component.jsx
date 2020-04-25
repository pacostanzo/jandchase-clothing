import React, {useEffect, useRef, useCallback} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';

import CustomButton from '../../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems, selectCartHidden} from '../../../redux/cart/cart.selectors';

import {toggleCartHidden} from "../../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';
import {withRouter} from "react-router-dom";

const CartDropdown = ({cartItems, hidden, history, toggleCartHidden}) => {
    const node = useRef();

    const handleClickOutside = useCallback(e => {
        if (node.current.contains(e.target)) {
            return;
        }
        toggleCartHidden();
    }, [toggleCartHidden]);

    useEffect(() => {
        if (!hidden) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [hidden, handleClickOutside]);

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
                toggleCartHidden();
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

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
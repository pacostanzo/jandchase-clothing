import React, {useRef, useEffect} from 'react';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../../redux/cart/cart.selectors";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import {connect} from "react-redux";
import {hideCartDropdown} from "../../../redux/cart/cart.actions";


const CartContainer = ({hidden, hideCartDropdown}) => {
    const node = useRef();

    useEffect(() => {

        const handleClick = e => {
            if (node.current.contains(e.target)) {
                return;
            }
            hideCartDropdown();
        };

        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [node, hidden, hideCartDropdown]);


    return (
        <div ref={node}>
            <CartIcon/>
            {hidden ? null : <CartDropdown/>}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    hideCartDropdown: () => dispatch(hideCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
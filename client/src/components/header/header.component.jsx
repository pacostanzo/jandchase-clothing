import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/needle.svg';
import DefaultAvatar from './../../assets/default.png';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Profile,
  Picture,
  Group,
  Dropdown,
  Link,
} from './header.styles';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import CartContainer from '../cart/cart-container/cart-container.component';

const Header = ({ currentUser, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>

        <CartContainer />

        {currentUser ? (
          <Profile>
            <Picture
              src={
                currentUser.photoURL !== null
                  ? currentUser.photoURL
                  : DefaultAvatar
              }
            ></Picture>
            <Dropdown>
              <Group>
                <Picture
                  src={
                    currentUser.photoURL !== null
                      ? currentUser.photoURL
                      : DefaultAvatar
                  }
                />
                <Link active="true">{currentUser.displayName}</Link>
                <Link>{currentUser.email}</Link>
              </Group>

              <Group>
                <Link active="true" onClick={() => signOutStart()}>
                  Sign out
                </Link>
              </Group>
            </Dropdown>
          </Profile>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

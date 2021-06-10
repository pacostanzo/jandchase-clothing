import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(ReactLink)`
  height: 80%;
  width: 80px;
  padding: 5px;

  @media screen and (max-width: 800px) {
    width: 60px;
    padding: 0px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(ReactLink)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Link = styled.p`
  text-decoration: none;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  font-size: ${({ active }) => (active === 'true' ? '1em' : '0.8em')};
  cursor: pointer;
  &:hover {
    color: gray;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  border: 0;
  width: 2.1rem;
  height: 2.1rem;
  cursor: pointer;
  border-radius: 15px;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 2px 2px lightgray;
  padding: 20px;
  width: 15rem;
  top: 4rem;
  right: 0.5rem;
  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
      margin-bottom: 0.5rem;
      width: 3rem;
      height: 3rem;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 15px;
  height: 100%;

  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    z-index: 999;
  }
`;

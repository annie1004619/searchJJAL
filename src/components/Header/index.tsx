import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

type HeaderProps = {
  searchIcon: boolean;
  text?: string;
};
function Header({ searchIcon, text }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo to={'/'}>짤</Logo>
      <Text>{text}</Text>
      <SearchIcon onClick={() => navigate('/')}>
        {searchIcon && <FiSearch size={25} />}
      </SearchIcon>
    </Container>
  );
}

const Container = styled.ul`
  width: 100%;
  display: flex;
  height: 40px;
  padding: auto 5vw;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2vh;
`;
const Logo = styled(Link)`
  border: 1px solid;
  cursor: pointer;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;
const Text = styled.div`
  font-weight: bold;
`;
const SearchIcon = styled.div`
  cursor: pointer;
`;
export default Header;

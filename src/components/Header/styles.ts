import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15);
  background: #fff;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #999;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
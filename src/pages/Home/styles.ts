import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px; 
`;


export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  text-align: center;
  padding: 30px;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 30px 40px;

    img {
      align-self: center;
      max-width: 250px;
      height: 130px;
    }

    > strong {
      font-size: 14px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 30px 0 10px;
    }
    > small{
      margin: 10px 0
    }

    button {
      background-color: #5db669;
      color: #fff;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;
      padding: .35rem .5rem;
        font-size: .875rem;
        line-height: 1.5;
        border-radius: .2rem;

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/joaobispo2077/philosophy-quiz">
        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="Acesse o repositório de código desse projeto" />
      </a>
      <p>
        Apoie esse projeto
        {' '}
        dando uma estrela no
        {' '}
        <a href="https://github.com/joaobispo2077/philosophy-quiz">
          <span>Github.</span>
        </a>
      </p>
    </FooterWrapper>
  );
}

import React, { useEffect, useState } from 'react';
import './Popup.css';
import styled from 'styled-components/macro';

function Popup({ visible, children }) {
  const [enable, setEnable] = useState(visible);

  useEffect(() => {
    setEnable(true);
  }, [visible]);

  return (
    <PopupContainer visible={enable} class='popup' id='popup'>
      <PopupContent visible={enable} class='popup__content'>
        <a
          href='#section-tours'
          class='popup__close'
          onClick={() => setEnable((enable) => !enable)}
        >
          &times;
        </a>
        <section className='contact-page'>{children}</section>
      </PopupContent>
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  @supports (
    (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))
  ) {
    .popup {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%)
    ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.25)')};
  transform: translate(-50%, -50%)
    ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.25)')};
  width: 75%;
  background-color: var(--clr-grey-10);
  -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: table;
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  -webkit-transition: all 0.5s 0.2s;
  transition: all 0.5s 0.2s;
`;

export default Popup;

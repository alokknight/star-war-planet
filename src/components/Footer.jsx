import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer className='d-flex justify-content-center mt-3' id='footer'>
      <p className='text-light'>
        Developed by 
        <FontAwesomeIcon className="heart" icon={fas.faHeart} />
      <a className='text-light linkFooter' href='https://github.com/alokknight'>ALOKKNIGHT</a>
      </p>
    </footer>
  );
}

export default Footer;

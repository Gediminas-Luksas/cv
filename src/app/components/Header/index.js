import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import data from './data';

function Header(props) {
  const { language, onLanguage } = props;
  const { contacts, picture, name, summary } = data[language];

  return (
    <header className="Header">
      <h1>{name}</h1>
      <hr className="hr" />
      <p className="Header--contact">
        {contacts.phone.lable} {contacts.phone.value}
      </p>
      <p className="Header--contact">
        {contacts.dateofbirth.lable} {contacts.dateofbirth.value}
      </p>
      <p className="Header--contact">
        {contacts.email.lable}{' '}
        <a
          href="mailto:gediminasluksas@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {contacts.email.value}
        </a>
      </p>
      <p className="Header--summary">{summary}</p>
      <img
        className="Header--profile-picture"
        alt={picture.alt}
        src={picture.src}
      />
      <select
        onChange={e => onLanguage(e.target.value)}
        className="Header--language-select"
      >
        <option value="en">English</option>
        <option value="lt">Lietuvių</option>
      </select>
    </header>
  );
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'lt']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;

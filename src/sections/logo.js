import React from 'react';
import '../style/logo.css';

const logoData = [
  { url: 'https://www.instagram.com/quentin_like_tarantino/', imageSrc: '../image/insta.png', alt: 'Instagram logo' },
  { url: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmTNpwKJnwTzBXbssddZLmZDgQMdqnWBjdVLPTNtzWjqcxkgDkqKLKxbZCwBTNmvHkRtjb', imageSrc: '../image/mail.png', alt: 'Mail logo' },
  { url: 'https://www.linkedin.com/in/quentin-riols-5b8b7b13a/', imageSrc: '../image/linkedin.png', alt: 'LinkedIn logo' },
];

const Logo = () => {
  return (
    <div className="logoSection">
      {logoData.map((logo, index) => (
        <a key={index} href={logo.url} target="_blank" rel="noreferrer">
          <img src={logo.imageSrc} className='contactLogo' alt={logo.alt} />
        </a>
      ))}
    </div>
  );
};

export default Logo;

import React, { useState, useEffect } from 'react';
import ListContact from "../ressources/fixeContactRessource"
import '../style/fixeContact.css';

const FixeContact = ({noShow}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (noShow) {
          setIsVisible(false);
        } else {
          const timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, 1000);
    
          return () => clearTimeout(timeoutId);
        }
      }, [noShow]);
    return (
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <div orientation="left" className="leftStack">
                <ListContact/>
            </div>
            <div orientation="right" className='rightStack'>
                <div className='sideMail'>
                    <a href={"mailto:quentin.riols@gmail.com"} className="sideRef">
                        quentin.riols@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FixeContact;
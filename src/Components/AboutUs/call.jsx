import React from 'react';
 
const PhoneLink= ({ phoneNumber }) => {
  const formattedPhoneNumber = phoneNumber.replace(/[^0-9+]/g, ''); // Remove non-numeric characters

  const handleClick = () => {
    window.location.href = `tel:${formattedPhoneNumber}`;
  };

  return (
    <a href={`tel:${formattedPhoneNumber}`} onClick={handleClick}>
      {phoneNumber}
    </a>
  );
};

export default PhoneLink;

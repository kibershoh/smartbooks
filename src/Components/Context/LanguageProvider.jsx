// LanguageProvider.js
import React, { useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from '../../Constants/translations';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const tr = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ tr,language, setLanguage, }}>
      {children}
    </LanguageContext.Provider>
  );
};

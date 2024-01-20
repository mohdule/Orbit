import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const changeLanguage = (lng: any) => {

    console.log("updating language")
    i18n.changeLanguage(lng);
    setDropdownVisible(false); // Close the dropdown after selecting a language
  };

  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'Arabic' },
    { code: 'ja', name: 'Japanese' },
    { code: 'hi', name: 'Hindi' },
  ];

  return (
    <div className="relative">
      <button
        className="text-black"
        id="languageDropdown"
        onClick={() => setDropdownVisible(!isDropdownVisible)}
      >
        {i18n.language.toUpperCase()} &#9662;
      </button>
      {isDropdownVisible && (
        <div
          className="absolute right-0 mt-2 w-40 bg-black rounded-md shadow-lg"
          aria-labelledby="languageDropdown"
        >
          {languageOptions.filter(option => option.code !== i18n.language).map((option) => (
            <button
              key={option.code}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-200 hover:text-black"
              onClick={() => changeLanguage(option.code)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
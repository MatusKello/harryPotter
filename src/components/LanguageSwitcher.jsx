import { useTranslation } from 'react-i18next';
import EngFlag from '../images/EngFlag.png';
import SlovakFlag from '../images/SlovakFlag.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <img
        style={{ cursor: 'pointer', marginRight: '1rem' }}
        src={EngFlag}
        alt=''
        onClick={() => changeLanguage('en')}
      ></img>

      <img
        style={{ cursor: 'pointer' }}
        src={SlovakFlag}
        onClick={() => changeLanguage('sk')}
      />
    </div>
  );
};

export default LanguageSwitcher;

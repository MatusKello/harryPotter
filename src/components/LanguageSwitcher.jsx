import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import EngFlag from '../images/EngFlag.png';
import SlovakFlag from '../images/SlovakFlag.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button variant='contained' onClick={() => changeLanguage('en')}>
        <img src={EngFlag} alt='' />
      </Button>

      <Button variant='contained' onClick={() => changeLanguage('sk')}>
        <img src={SlovakFlag} />
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

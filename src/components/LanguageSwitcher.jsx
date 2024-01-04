import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    console.log('Changing language to:', language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <Button variant='contained' onClick={() => changeLanguage('en')}>
        English
      </Button>
      <Button variant='contained' onClick={() => changeLanguage('sk')}>
        Slovak
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

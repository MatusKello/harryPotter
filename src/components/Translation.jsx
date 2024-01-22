import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Translation = ({ text, typographyProps }) => {
  const { t } = useTranslation();
  console.log('🚀 ~ Translation ~ typographyProps:', typographyProps);

  return <Typography {...typographyProps}>{t(text)}</Typography>;
};

export default Translation;

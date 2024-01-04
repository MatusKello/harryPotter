import Translation from '../components/Translation';

const MainPage = () => {
  return (
    <div>
      <Translation
        text='welcome'
        typographyProps={{
          variant: 'h2',
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
      <Translation
        text='author'
        typographyProps={{
          variant: 'caption',
          sx: { color: (theme) => theme.palette.primary.main },
        }}
      />
    </div>
  );
};

export default MainPage;

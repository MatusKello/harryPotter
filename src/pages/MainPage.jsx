import Translation from '../components/Translation';

const MainPage = () => {
  return (
    <div
      style={{
        height: '90vh', // Set the height to 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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

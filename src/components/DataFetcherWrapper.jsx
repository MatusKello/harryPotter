import { Box } from '@mui/material';

const DataFetcherWrapper = ({ queryResponse, children }) => {
  const isAnyLoading = queryResponse?.some(
    (query) => query.isLoading === true || query.isFetching === true
  );
  const isAnyError = queryResponse?.some((query) => query.isError === true);

  return (
    <>
      {isAnyLoading ? (
        <Box>Please wait</Box>
      ) : isAnyError ? (
        <Box>Something went wrong</Box>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default DataFetcherWrapper;

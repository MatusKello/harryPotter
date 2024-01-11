const DataFetcherWrapper = ({ queryHook, children }) => {
  const { data, error, isLoading, isSuccess } = queryHook();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return children(data);
  }

  return null;
};

export default DataFetcherWrapper;

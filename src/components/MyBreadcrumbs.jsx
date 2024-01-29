import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchCharacterByIdQuery } from '../apiSlice';
import DataFetcherWrapper from './DataFetcherWrapper';

function MyBreadcrumbs() {
  const { id } = useParams();
  const exactCharacter = useFetchCharacterByIdQuery(id);
  const exactCharacterData =
    (exactCharacter.isSuccess && exactCharacter?.data?.[0]) || {};
  const location = useLocation();

  // Split the pathname into an array of path segments
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <DataFetcherWrapper queryResponse={[exactCharacter]}>
      <Breadcrumbs aria-label='breadcrumb'>
        {pathnames.length > 0 ? (
          <Link color='inherit' href='/'>
            Home
          </Link>
        ) : (
          <Typography color='textPrimary'>Home</Typography>
        )}

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Typography key={name} color='textPrimary'>
              {exactCharacterData.name || name}
            </Typography>
          ) : (
            <Link key={name} color='inherit' href={routeTo}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </DataFetcherWrapper>
  );
}

export default MyBreadcrumbs;

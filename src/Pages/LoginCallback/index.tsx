import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { sendCodeForSISECI } from '../../services/auth';

export default function LoginCallback(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    const url = (window as any).location.search;
    const query = new URLSearchParams(url);
    const code: any = query.get("code");
    if (code) {
      sendCodeForSISECI(code, history);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}

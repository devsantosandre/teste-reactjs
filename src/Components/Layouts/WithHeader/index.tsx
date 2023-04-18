import React, { ReactElement, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Header } from '../..';
import { StateProvider } from '../../../providers/StateProvider';
import { sendCodeForSISECI } from '../../../services/auth';
import reducer, { initialState } from '../../../store/reducer';
// import Header from '../../Header';

interface Props {
  children: JSX.Element;
  window?: () => Window;
}

export default function Dash(props: Props): ReactElement {
  const { children } = props;
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const url = (window as any).location.search;
    const { pathname } = location;
    const query = new URLSearchParams(url);
    const code: any = query.get('code');
    if (code) {
      localStorage.setItem('pathname_redirect_gov', pathname);
      sendCodeForSISECI(code, history);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Header />
      {children}
    </StateProvider>
  );
}

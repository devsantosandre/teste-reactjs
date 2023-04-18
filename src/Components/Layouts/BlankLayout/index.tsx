import React, { ReactElement, useEffect } from 'react';
import {
  Fab,
  Theme,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { createStyles, makeStyles } from '@material-ui/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { sendCodeForSISECI } from '../../../services/auth';
import reducer, { initialState } from '../../../store/reducer';
import { StateProvider } from '../../../providers/StateProvider';


interface Props {
  children: JSX.Element;
  // eslint-disable-next-line react/require-default-props
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props: Props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BlankLayout(props: Props): ReactElement {
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
      {children}
      <ScrollTop {...props}>
        <Fab
          style={{ right: 6, borderRadius: 0 }}
          size="small"
          color="secondary"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </StateProvider>
  );
}

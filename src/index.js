import React from 'react';
import PropTypes from "prop-types";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LoadProvider } from "./contexts/Load";
import { CurrentUserProvider } from "./contexts/CurrentUser";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";

// copied from https://mui.com/guides/routing/, to handle routing via react-router
const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node,
};
// <<< end: copied from https://mui.com/guides/routing/, to handle routing via react-router

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <LoadProvider>
      <CurrentUserProvider>
        <CssBaseline enableColorScheme />
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <App />
        </ThemeProvider>
      </CurrentUserProvider>
    </LoadProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
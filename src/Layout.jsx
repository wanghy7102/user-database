import { Outlet } from "react-router-dom";
import { People } from "@mui/icons-material";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Link,
} from "@mui/material";

const defaultTheme = createTheme();

const Layout = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <People sx={{ mr: 2 }} />
          <Link
            variant="h6"
            color="inherit"
            noWrap
            href="/user-database/"
            underline="none"
          >
            User Database
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Layout;

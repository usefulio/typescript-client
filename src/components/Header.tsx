import * as React from "react";

// Components.
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });

export interface HeaderProps extends WithStyles<typeof styles> {}

class Header extends React.Component<HeaderProps> {
  onClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              TypeScript React
            </Typography>
            {localStorage.getItem("token") && (
              <Button color="inherit" onClick={this.onClick}>
                Sign Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const WrappedHeader = withStyles(styles)(Header);

export { WrappedHeader as Header };

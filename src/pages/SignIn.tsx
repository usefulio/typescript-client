import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";

// Components.
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";

// Utils.
import sha256 from "../utils/sha256";

const SIGNIN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    token: signIn(email: $email, password: $password)
  }
`;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      paddingRight: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    button: {
      margin: theme.spacing.unit,
      marginTop: theme.spacing.unit * 3,
      width: 200,
    },
  });

export interface LoginProps extends WithStyles<typeof styles> {}

class SignIn extends React.Component<LoginProps> {
  state = {
    email: "luke.jagodzinski@gmail.com",
    password: "password",
    hasError: false,
    error: "",
  };

  onChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onSnackbarClose = () => {
    this.setState({
      hasError: false,
      error: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Mutation mutation={SIGNIN_MUTATION}>
        {signIn => (
          <div className={classes.root}>
            <form
              className={classes.form}
              onSubmit={async event => {
                event.preventDefault();
                const { email, password } = this.state;
                try {
                  const result = await signIn({
                    variables: { email, password: sha256(password) },
                  });
                  localStorage.setItem("token", result && result.data.token);
                  window.location.replace("/");
                } catch (error) {
                  this.setState({
                    hasError: true,
                    error: error.message,
                  });
                }
              }}
            >
              <TextField
                label="E-mail"
                className={classes.textField}
                value={this.state.email}
                onChange={this.onChange("email")}
              />
              <TextField
                type="password"
                label="Password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.onChange("password")}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign In
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={this.state.hasError}
              onClose={this.onSnackbarClose}
              autoHideDuration={2000}
              message={this.state.error}
            />
          </div>
        )}
      </Mutation>
    );
  }
}

const WrappedLogin = withStyles(styles)(SignIn);

export { WrappedLogin as SignIn };

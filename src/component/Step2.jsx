import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import StepNumber from './StepNumber';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

class Step2 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="my-4">
        <StepNumber
          num1="num1"
          step1="step1"
          line1="line1"
          num2="num2"
          step2="step2"
        />

      <div className="text-center my-3 border py-5 p-3 rounded">
        <h1>Biodata</h1>
        <div className="d-flex justify-content-center">
          <div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Fullname"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Surname"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Date Of Birth"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
          </div>

          <div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Email"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Hobbies"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
            <div>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Nationality"
                  id="mui-theme-provider-standard-input"
                />
              </MuiThemeProvider>
            </div>
          </div>
        </div>
      </div>

      <div className="text-right my-3">
        <NavLink to='/step3'>
          <button type="submit" className="btn btn-primary my-0">Next</button>
        </NavLink>
      </div>
      </div>
    );
  }

}

Step2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Step2);

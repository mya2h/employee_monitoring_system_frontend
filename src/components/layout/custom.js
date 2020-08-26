import React from "react";

import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components

const useStyles = makeStyles(theme=>({
        disabled: {
          "&:before": {
            backgroundColor: "transparent !important"
          }
        },
        underline: {
          "&:hover:not($disabled):before,&:before": {
            borderColor: 'black' + " !important",
            borderWidth: "1px !important"
          },
          "&:after": {
            borderColor: 'blue'
          }
        },
        underlineError: {
          "&:after": {
            borderColor: 'red'
          }
        },
        underlineSuccess: {
          "&:after": {
            borderColor: 'green'
          }
        },
        labelRoot: {
        //   ...defaultFont,
          color: 'gray' + " !important",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "1.42857",
          letterSpacing: "unset"
        },
        labelRootError: {
          color: 'red'
        },
        labelRootSuccess: {
          color: 'green'
        },
        feedback: {
          position: "absolute",
          top: "18px",
          right: "0",
          zIndex: "2",
          display: "block",
          width: "24px",
          height: "24px",
          textAlign: "center",
          pointerEvents: "none"
        },
        marginTop: {
          marginTop: "16px"
        },
        formControl: {
          paddingBottom: "10px",
          margin: "27px 0 0 0",
          position: "relative",
          verticalAlign: "unset"
        }      
}));

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success
  } = props;

//   const labelClasses = classNames({
//     [" " + classes.labelRootError]: error,
//     [" " + classes.labelRootSuccess]: success && !error
//   });
//   const underlineClasses = classNames({
//     [classes.underlineError]: error,
//     [classes.underlineSuccess]: success && !error,
//     [classes.underline]: true
//   });
//   const marginTop = classNames({
//     [classes.marginTop]: labelText === undefined
//   });
  return (
    <FormControl
      {...formControlProps}
      className={classes.formControl}
    >
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          root: classes.marginTop,
          disabled: classes.disabled,
         
        }}
        id={id}
        {...inputProps}
      />
      {error ? (
        <Clear className={classes.feedback + " " + classes.labelRootError} />
      ) : success ? (
        <Check className={classes.feedback + " " + classes.labelRootSuccess} />
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

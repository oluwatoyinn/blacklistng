import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import TextField  from '@mui/material/TextField';

export default function InputField(props) {
  const { errorText,htmlFor,labelName, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <React.Fragment>
      <label style={{fontSize:20, fontWeight:600, marginLeft:'5px', paddingBottom:'10px'}} htmlFor={htmlFor}> {labelName} </label>
      <TextField
        className="input-fields"
        type="text"
        error={meta.touched && meta.error && true}
        variant="standard"
        // margin="dense"
        helperText={_renderHelperText()}
        {...field}
        {...rest}
      />
      </React.Fragment>
  );
}
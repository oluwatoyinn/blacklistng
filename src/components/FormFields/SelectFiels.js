import React from 'react';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from '@mui/material/';



const useStyles = makeStyles((theme) => ({
  // root:{
  //   '& label.Mui-focused': {
  //     color: 'green',
  //     fontSize:'18px'
  //   },
  // },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));

function SelectField(props) {
  const classes = useStyles();
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

//   const data =[
//     {name:'General Information Request'},
//     {name:'Partners Relations'},
//     {name:'Software Licencing'}
//   ]

  return (
    <FormControl 
    {...rest} 
    error={isError}  
    // margin="dense" 
    className={classes.root}
    >
      <InputLabel>{label}</InputLabel>
        
      <Select {...field} value={selectedValue ? selectedValue : ''} variant="standard" >
        {data.map((item, index) => (
          <MenuItem key={index} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
import React from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './components/Input'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


export default function Form({ 
  size = 6, 
  children,
  title,
  })  {
    
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
 
  return (
    <Grid item xs={size}>
      <div>
      <Typography variant="h4">{title}</Typography>
      <form>
        <Grid container justify="space-between" direction="row" spacing={5}>
          <Input placeholder="Компания" article="Компания"/> 
          <Input placeholder="Имя" article="Имя*"/> 
          <Input placeholder="Город" article="Город*"/> 
          <Input placeholder="Страна" article="Страна*"/> 
          <Input placeholder="E-Мейл" article="Е-Мейл*"/> 
          <Input placeholder="Специальность" article="Специальность*"/> 
          <Grid item xs={6}>
            <FormControl variant="outlined" >
            <Select
              native
              fullWidth
              value={state.age}
              onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}>

              <option aria-label="None" value="ыглф" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          </Grid>
        </Grid>
      </form> 
         {children}
      </div>
    </Grid>
  );
};

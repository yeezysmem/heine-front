import React from 'react';
import { Grid, Button, Typography, Paper,Container, TextField,InputLabel,Select,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from '../HeineForm/form/Form'
import Content from '../HeineForm/content/Content'

import HEINE from '../../assets/images/heinedistr.svg'
import OrangeBtn from '../../common/Btns/OrangeBtn'
import LightOutlineBtn from '../../common/Btns/LightOutlineBtn'
import DarkOutlineBtn from '../../common/Btns/DarkOutlineBtn'

const useStyles = makeStyles(theme => ({
  heineForm: {
    // display:"flex",
    // justifyContent:"start",
    // alignItems: "center",
    height: 500,
    backgroundColor: theme.palette.primary.main,
    },
    input: {
      padding: 15,
    },
    findDistr: {
      display:"flex",
        justifyContent:"start",
        alignItems: "center",
        height: 500,
        backgroundColor: theme.palette.primary.main,
    }
    
  

}));

export default function HeineForm()  {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
  setAge(event.target.value);}
  const classes = useStyles();
  
  return (
        <Grid item xs={12}>
          <Paper className={classes.heineForm}>
            <Container className={classes.findDistr}>
            <Grid container justify="space-between">
              <Form size={5} 
                title="Найти дистибьютора"
                subtitle1="Вы заинтересованы в одном из наших продуктов?"
                subtitle2="Найдите ближайшего к вам дистрибьютора быстро и легко.">
                <form>
                  <TextField  
                  label='Введите свою страну'
                  color="primary" 
                  variant="outlined"
                  fullWidth
                  inputProps={{
                      className: classes.input
                  }}
                  className={classes.formControl} />
                  
              
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">Выберите специальность</InputLabel>
                <Select
                    native
                    value={age}
                    onChange={handleChange}
                    label="Выберите специальность"
                    inputProps={{
                    name: 'age',
                    id: 'outlined-age-native-simple',
                    className: classes.input,
                    }}>
                    <option value="" disabled />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
                    <OrangeBtn buttonText="Поиск"/>
                </FormControl>
                </form>        
                  </Form>
                <Content size={6} 
                  image={HEINE}>
                  <Typography variant="body2" component="p" style={{color:'#fff'}}>
                    HEINE Optotechnik является мировым лидером в производстве инструментов для первичной диагностики с более чем 500 сотрудниками. На протяжении более 70 лет компания HEINE Optotechnik находится в 100% семейном владении и управлении. Мы продолжаем разрабатывать и производить инструменты HEINE на наших предприятиях в Германии, где мы сочетаем многолетний опыт и мастерство с самыми современными производственными технологиями.
                  </Typography>
                  
                </Content>
            </Grid>

          </Container>
        </Paper>
        </Grid>
  );
};

import React,{useState} from 'react'
import _ from 'lodash';  
import {useDispatch,useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import {Grid,createMuiTheme,ThemeProvider,makeStyles} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import {common, green,lightGreen} from '@material-ui/core/colors';
import { borders } from '@material-ui/system';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




const theme = createMuiTheme({ 
    palette: {
      primary:{
        main: green[800], 
        
      },
      secondary:{
        main: lightGreen[100]
      },
      action:{
        
      }
    },
  })
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });


export default function TabsComponent() {

    const state = useSelector(state => state);
    const division = _.get(state,'employees.user.userData.division','');
    const classes = useStyles();
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  
    return (
      
        <div>
 
            
             <ThemeProvider theme ={theme}>
            
            
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="EVENTS" />
        <Tab label="POLLS" />
        <Tab label="GALLERY" />
        <Tab label="EMPLOYEES" />
        <Tab label="POSTS" />
        <Tab label="MESSAGES" />
      </Tabs>
              
           
          
            
            </ThemeProvider>

            
        </div>
    )
}

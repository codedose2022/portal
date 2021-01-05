import React from 'react';
import Navbar from './Navbar'
import TabsComponent from './TabsComponent'
import useStyles from './CommonStyles';




export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
        <Navbar/>
        <div className={classes.topPadding}/>
        <TabsComponent/>
     

        </div>
    )
}

import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from './Navbar'
import TabsComponent from './TabsComponent'




export default function Dashboard() {
    return (
        <div>
        <Navbar/>

        <div style={{paddingTop:'20px'}}>
        <TabsComponent/>
        </div>

       

        </div>
    )
}

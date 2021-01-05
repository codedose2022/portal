
import express, { response } from "express";

import mongoose from 'mongoose';
import employeeDetails from '../models/employeeSchema.js';
const router = express.Router();

const INVALID_EMAIL = '10';
const LOGIN_SUCCESSFUL = '11';
const INVALID_PASSWORD = '12';

export const getEmployees = async (req,res) => { 
     try {
         const employees = await employeeDetails.find({"disableInd" : 'N'});
        
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createEmployee = async (req,res) => { 
    const employee = new employeeDetails(req.body)
    try {
        await employee.save();
       res.status(200).json(employee);
   } catch (error) {
       res.status(404).json({ message: error.message });
   }
}

export const getProfile = async (req,res) => { 
    const { id } = req.body;
    try {
        const employee = await employeeDetails.find({"_id" : id},{password:0,email:0});
        res.status(200).json(employee);
   } catch (error) {
       res.status(404).json({ message: error.message });
   }
 }


 export const editProfile = async (req,res) => { 
    
    try {
        const entries = Object.keys(req.body)
        console.log(entries)
        const updates = {}
            for (let i = 0; i < entries.length; i++) {
            updates[entries[i]] = Object.values(req.body)[i]
            }
            await employeeDetails.updateOne({
            "_id": req.body._id
            } , {
            $set: updates
            } ,
            function (err , success) {
            if (err) throw (err);
            else {
               
            res.send({
            msg: "update success"
            })
            }
            })

   } catch (error) {
       res.status(404).json({ message: error.message });
   }
 }


export const login = async (req,res) => {   
    const {email,password} = req.body;
    let response;
    let responseData = { 
        userData:{
            firstName :'',
            lastName:'',
            id:'',
            division:''
        },      
    }
    let responseMessages = {
        messages:{
            status:'',
            message:''
        },
    }
    try {
        employeeDetails.find({"email":email},(err,e)=>{
            if(!e.length){
                responseMessages.messages.message= 'invalid email';
                responseMessages.messages.status = INVALID_EMAIL;
                return res.status(200).json(responseMessages);
            } 
            if(e.length && e[0].password === password){
                responseData.userData.firstName = e[0].firstName;
                responseData.userData.lastName = e[0].lastName;
                responseData.userData.id = e[0]._id;
                responseData.userData.division = e[0].division;
                responseMessages.messages.message= 'login success';
                responseMessages.messages.status = LOGIN_SUCCESSFUL;
                response = Object.assign(responseData, responseMessages);
                return res.status(200).json(response);
            }

            else{
                responseMessages.messages.message= 'invalid password';
                responseMessages.messages.status = INVALID_PASSWORD;
                return res.status(200).json(responseMessages);
            }
         });   
        }
       
   catch (error) {
    return res.status(404).json({ message: error.message });
   }
}




export default router;

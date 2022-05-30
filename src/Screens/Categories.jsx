import React, { useState,useEffect } from 'react'
import Header from '../Components/Header'
import Axios from 'axios';
import '../styles/Categories.css';
import Tabs from '../Components/Tabs';


function Categories() {
    
    const [mainCategories, setMainCategories] = useState([]);

    const fetchmainCategories = async() => {
        await Axios.get('https://private-b258dc-repjointwork.apiary-mock.com/repAccessMainCategory').then((data) => {
            setMainCategories(data.data);
            console.log(data.data);
            localStorage.setItem('mainCategories', JSON.stringify(data.data));
        })
    }
    
    useEffect(() => {
        fetchmainCategories();
    }, []);

    return (
        <>
            <Header />
            <Tabs mainCategories={mainCategories}/>
        </>
  )
}

export default Categories
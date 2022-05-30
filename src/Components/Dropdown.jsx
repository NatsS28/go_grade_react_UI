import React, { useState,useEffect } from 'react'
import '../styles/Dropdown.css'
import Axios from 'axios';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

function Dropdown({selected,setSelected,setSelectedRepId}) {
    const [isActive, setActive] = useState(false);
    const [assignedUser, setassignedUser] = useState([]);

    const fetchReportingRepList = async() => {
        await Axios.get(`https://private-b258dc-repjointwork.apiary-mock.com/repAccessList`).then((data) => {
            setassignedUser(data.data);
        })
    }

    useEffect(() => {
        fetchReportingRepList();
    },[]);

  return (
      <div className='dropdown'>
          <div className='dropdown-btn' onClick={(e)=>setActive(!isActive)}>{selected === '' ? "Choose Representative" : selected}</div>
          {isActive && (
              <div className='dropdown-content'>
                  {assignedUser.map((option) => {
                      return (
                          <>
                              <div className='dropdown-item' key={option.repId} onClick={(e) => {
                                  setSelected(option.repName)
                                  setSelectedRepId(option.repId)
                                  setActive(false)
                              }}>{option.repName}<span className='info-icon'><HelpOutlineSharpIcon/></span></div>
                          </>
                      )
                  })}
              </div>
          )}
    </div>
  )
}

export default Dropdown
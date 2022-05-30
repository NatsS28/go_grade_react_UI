import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        setUserName(localStorage.getItem('username'));
    },[])

  return (
      <div className='header'>
          <div className='app_name'>GoGrade</div>
          <div className='headername-container'><AccountCircleIcon/><span className='header_name'>{userName}</span></div>
    </div>
  )
}

export default Header
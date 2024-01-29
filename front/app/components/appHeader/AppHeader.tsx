
import { AccountCircle } from "@mui/icons-material"
import React from 'react';
import './AppHeader.module.css'
import Logo from "../logo/Logo";

function AppHeader() {
  return (
    <div className='container'>
      <div className='group_with_logo'>
        <div className='logo'><Logo /></div>
        <h3 className='name_of_project'>Sorting Hat</h3>
      </div>
      <div className='group'>
        <div className='item'>
          {/* <ListIcon type="secondary" /> */}
          <h3 className='section'>Поиск траекторий</h3>
        </div>
        <div className='item'>
          {/* <ListIcon type="secondary" /> */}
          <h3 className='section'>Мои траектории</h3>
        </div>
        <div className='item'>
          {/* <ListIcon type="secondary" /> */}
          <h3 className='section'>Закладки</h3>
        </div>
        <div className='item'>
          <AccountCircle type="secondary" />
        </div>
      </div>
    </div>
  )
}

export default AppHeader;
import React, { useState, useEffect } from 'react';

import {
    storeCurrentUser,
    clearCurrentUser
  } from '../auth';

  const Header = ({
    currentUser,
    setCurrentUser,
    userList 
  }) => {}

  return (
    <header>
        <h1>Strangers' Things</h1>
        <form >
        <div class = "nameEntry">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username"> 
        </div>  
        <div class = "passwordEntry">
            <label for="password">Password:</label>
            <input type="text" id="password" name="password"> 
        </div> 
        <div class = "passwordConfirm">
            <label for="passwordC">Confirm password:</label>
            <input type="text" id="passwordC" name="passwordC"> 
        </div>   
        </form>
    </header>

  )



  }

  export default Header;
import React from "react";
import { useAuth } from "../Auth/auth";

function ProfilePage(){
    const auth = useAuth();
   
    return(
        <>
      <h1 class="title">My account</h1>

      <form action="/" class="form-container">
        
          <label  >Name</label>
          <p class="value">{auth.user.username}</p>

          <label  >Email</label>
          <p class="value">camilayokoo@gmail.com</p>

          <label  >Password</label>
          <p class="value">*********</p>
        
        <input type="submit" value="Edit" class="button"/>
      </form>

        </>
    )
}

export {ProfilePage};
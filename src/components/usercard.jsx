// write the component code here
import React from 'react'
import profilePhoto from '../assets/download.png';
function Usercard() {
    const user={
        name:"John Doe",
        mail:"johndoe@gmail.com",
        phoneNumber:"9552152XXX",
        address:"54 bleecker street"
    }
  return (
    <div>
        <img src={profilePhoto} alt="Profile" style={{ width: '100px', borderRadius: '50%' }} />
        <br></br>
        {user.name}
        <br></br>
        {user.mail}
        <br></br>
        {user.phoneNumber}
        <br></br>
        {user.address}
    </div>
  )
}

export default Usercard
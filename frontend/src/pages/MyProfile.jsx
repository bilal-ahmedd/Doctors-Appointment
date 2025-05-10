import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [ userData, setUserData ] = useState( {
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "info@docappointment.com",
    phone: "+ 021 88889999",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London" 
    },
    gender: "Male",
    dob: "2000-01-20"
  });

  const [ isEdit, setIsEdit ] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="User image" />
      {
        isEdit 
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name:e.target.value}))} />
        : <p> {userData.name} </p>
      }
    </div>
  )
}

export default MyProfile

import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Home = () => {
 const navigate = useNavigate();
  return (
    <div>
      This is Home Page
      <div className='text-center'>
        <NavLink to="/newPost" >
        <button className="btn btn-success"  >Add New Events</button>
        </NavLink>
       <NavLink to="/pastEvent" >
      <button className="btn btn-outline-dark m-3">Past events</button>
      </NavLink >
      </div>
    </div>
  )
}

export default Home;

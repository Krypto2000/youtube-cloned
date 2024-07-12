import React from 'react'
import "./_sidebar.scss"
import { MdHome, MdSubscriptions, MdExitToApp, MdThumbUp, MdLibraryBooks, MdHistory, MdSentimentDissatisfied } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/AuthAction'
export const Sidebar = ({sidebar, handleToggleSidebar}) => {
 
 const dispatch = useDispatch()
  const LogoutHandler =()=>{
    dispatch(logout())
 }
 
  return (
    <nav className= {sidebar? 'sidebar open': "sidebar"}
    onClick={()=>handleToggleSidebar(false)}
    >
    <ul>
    <li key="home">
    <MdHome size={23}/>
    <span>Home</span>
    </li>
    <li key="subscription">
    <MdSubscriptions size={23}/>
    <span>Subscription</span>
    </li>
    <li key="liked">
    <MdThumbUp size={23}/>
    <span>Liked Video</span>
    </li>
    <li key="history">
    <MdHistory size={23}/>
    <span>History</span>
    </li>

    <li key="library">
    <MdLibraryBooks size={23}/>
    <span>Library</span>
    </li>
    <li key="unknown">
    <MdSentimentDissatisfied size={23}/>
    <span>I don't know</span>
    </li>

    <hr />
    <li key="logout" onClick={LogoutHandler}>
    <MdExitToApp size={23}/>
    <span>Log Out</span>
    </li>
    </ul>
    <hr />
    </nav>
    
  )
}

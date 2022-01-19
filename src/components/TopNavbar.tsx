import React, { FC } from 'react'
import '../App.scss'
import './TopNavbar.scss'

interface TopNavbarProps {
    reloadData: () => void
}

const TopNavbar: FC<TopNavbarProps> = ({ reloadData }) => {
  return (
    <div className='topbar-wrapper' >
       <h1>Hacker News</h1>
        <button onClick={reloadData} className="button">Indlæs nye stories</button>
    </div>
  )
}

export default TopNavbar

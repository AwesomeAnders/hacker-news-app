import React, { FC, useEffect } from 'react'
import './App.scss'

import Story from '../src/components/Story'
import TopNavbar from '../src/components/TopNavbar'
import { useStoryAPI } from './hooks/useStoryApi'

const App: FC = () => {
  const { getData, storyData, isLoading } = useStoryAPI()

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <TopNavbar reloadData={() => getData()}></TopNavbar>
      { isLoading
        ? (<div style={{ display: 'flex', justifyContent: 'center' }}><p>Loading....</p></div>)
        : (<ul className="cards">
        {storyData.map((item, index) => {
          return <Story user={item.user} key={index} item={item.item}>
          </Story>
        })}
     </ul>) }
    </div>
  )
}

export default App

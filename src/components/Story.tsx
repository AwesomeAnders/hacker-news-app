import React, { FC } from 'react'
import { ItemModel } from '../models/ItemModel'
import { UserModel } from '../models/UserModel'
import './Story.scss'
import { timeAgo } from '../utils/convertTime'

interface StoryProps {
    item: ItemModel,
    user: UserModel
}

const Story: FC<StoryProps> = ({ item, user }) => {
  return (
        <li>
          <div className="card">
            <img src="./news-placeholder.png" className="card_image" alt="" />
            <div className="card_overlay">
              <div className="card_header">
                <svg className="card_arc"><path /></svg>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <h3 className="card_title">{item.title}</h3>
                    <div className='card_status-box'>
                      <div className='card_status-wrapper'>
                        <span className="card_status"><b>{item.time && timeAgo(item.time)}</b></span>
                        <span className='card_status'><b>Author:</b> {user.id} </span>
                      </div>
                      <div className='card_status-wrapper' style={{ marginLeft: '10px' }}>
                        <span className='card_status'><b>Score:</b> {item.score} </span>
                        <span className='card_status'><b>Karma:</b> {user.karma} </span>
                      </div>
                    </div>
                </div>
              </div>
              <div className="card_description-wrapper">
                  <a href={item.url} className='card_url'>{item.url}</a>
              </div>
            </div>
          </div>
        </li>)
}

export default Story

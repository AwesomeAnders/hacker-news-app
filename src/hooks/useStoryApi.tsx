/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { ItemModel } from '../models/ItemModel'
import { UserModel } from '../models/UserModel'
import { StoryModel } from '../models/StoryModel'

type Hook = () => {
    getData: () => Promise<void>;
    isLoading: Boolean
    storyData: StoryModel[]
}

export const useStoryAPI: Hook = () => {
  const [storyData, setStoryData] = useState<StoryModel[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const getData = async () => {
    setIsLoading(true)

    // get story ids from top 500
    const storyIds: number[] = await (await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')).json()

    // sort array in random order and get 10 first indexes
    const randomStoryIds = storyIds.sort(() => Math.random() - Math.random()).slice(0, 10)

    const storyPromises = randomStoryIds.map(async (storyId: number) => {
      const item: ItemModel = await (await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)).json()
      const user: UserModel = await (await fetch(`https://hacker-news.firebaseio.com/v0/user/${item.by}.json`)).json()
      return { item, user }
    })
    const stories: StoryModel[] = await Promise.all(storyPromises)

    setStoryData(stories)

    setIsLoading(false)
  }

  return {
    getData,
    isLoading,
    storyData
  }
}

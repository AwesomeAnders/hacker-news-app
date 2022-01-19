import { ItemModel } from './ItemModel'
import { UserModel } from './UserModel'

export interface StoryModel {
    user: UserModel,
    item: ItemModel
}

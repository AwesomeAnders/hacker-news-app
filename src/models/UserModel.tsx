export interface UserModel {
    id: string,
    created: number,
    karma: number,
    about?: string,
    submitted?: number[]
}

import { UserInfo } from './UserInfo'

export type Issue = {
  id: number
  html_url: string
  number: number
  title: string
  created_at: string
  body: string
  user: UserInfo
  comments: string
}

import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Issue, UserInfo } from '../@types'
import { ResponsiveContainer } from '../components/containers/ResponsiveContainer'
import { Header } from '../components/Header'
import { Profile } from '../components/info/Profile'
import { IssuesList } from '../components/lists/IssuesList'
import { SearchIssue } from '../components/utility/SearchIssue'
import { api } from '../lib/axios'

interface IHomeProps {
  userInfo: UserInfo
  issuesList: Issue[]
}

export async function getStaticProps() {
  const userData = await api.get(`/users/rocketseat-education`)
  const issuesList = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues`)

  return {
    props: {
      userInfo: userData.data,
      issuesList: issuesList.data
    }
  }
}

const Home: NextPage<IHomeProps> = ({ userInfo, issuesList }) => {
  return (
    <>
      <Header />
      <ResponsiveContainer>
        <Flex as="main" mt="-5rem" flexDir="column">
          <Profile user={userInfo} />
          <SearchIssue />
          <IssuesList issues={issuesList} />
        </Flex>
      </ResponsiveContainer>
    </>
  )
}

export default Home

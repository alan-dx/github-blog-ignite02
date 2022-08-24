import { Flex } from '@chakra-ui/react'
import { Issue, NextPageWithLayout, UserInfo } from '../@types'
import { Profile } from '../components/info/Profile'
import { PrimaryLayout } from '../components/layouts/PrimaryLayout'
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

const Home: NextPageWithLayout<IHomeProps> = ({ userInfo, issuesList }) => {
  return (
    <Flex as="main" mt="-5rem" flexDir="column">
      <Profile user={userInfo} />
      <SearchIssue />
      <IssuesList issues={issuesList} />
    </Flex>
  )
}

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home

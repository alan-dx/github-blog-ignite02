import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Issue, NextPageWithLayout, UserInfo } from '~/@types'
import { Profile } from '~/components/info/Profile'
import { PrimaryLayout } from '~/components/layouts/PrimaryLayout'
import { IssuesList } from '~/components/lists/IssuesList'
import { SearchIssue } from '~/components/utility/SearchIssue'
import { api } from '~/lib/axios'

interface IHomeProps {
  userInfo: UserInfo
  issuesList: Issue[]
}

export async function getStaticProps() {
  const userData = await api.get(`/users/alan-dx`)
  const issuesList = await api.get(`/repos/alan-dx/github-blog-ignite02/issues`)

  return {
    props: {
      userInfo: userData.data,
      issuesList: issuesList.data
    }
  }
}

const Home: NextPageWithLayout<IHomeProps> = ({ userInfo, issuesList }) => {
  const [issues, setIssues] = React.useState(issuesList)

  async function handleFilterIssues(searchTerm: string) {
    if (!searchTerm) {
      return
    }
    const searchParams = encodeURI(searchTerm)

    try {
      const response = await api.get(`/search/issues?q=${searchParams}repo:alan-dx/github-blog-ignite02`)
      setIssues(response.data.items)
    } catch (error) {
      alert('Não foi possível realizar a busca, por favor tente novamente em instantes!')
    }

  }

  return (
    <Flex as="main" mt="-5rem" flexDir="column">
      <Profile user={userInfo} />
      <SearchIssue handleFilterIssues={handleFilterIssues} searchCount={issues.length} />
      <IssuesList issues={issues} />
    </Flex>
  )
}

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home

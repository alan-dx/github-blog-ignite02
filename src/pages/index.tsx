import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { UserInfo } from '../@types/UserInfo'
import { ResponsiveContainer } from '../components/containers/ResponsiveContainer'
import { Header } from '../components/Header'
import { Profile } from '../components/info/Profile'
import { api } from '../lib/axios'

interface IHomeProps {
  userInfo: UserInfo
}

export async function getStaticProps() {
  const userData = await api.get(`/users/rocketseat-education`)
  console.log(`teste`)

  return {
    props: {
      userInfo: userData.data
    }
  }
}

const Home: NextPage<IHomeProps> = ({ userInfo }) => {
  return (
    <>
      <Header />
      <ResponsiveContainer>
        <Flex as="main" mt="-5rem">
          <Profile user={userInfo} />
        </Flex>
      </ResponsiveContainer>
    </>
  )
}

export default Home

import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ResponsiveContainer } from '../components/containers/ResponsiveContainer'
import { Header } from '../components/Header'
import { Profile } from '../components/info/Profile'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ResponsiveContainer>
        <Flex as="main" mt="-5rem">
          <Profile />
        </Flex>
      </ResponsiveContainer>
    </>
  )
}

export default Home

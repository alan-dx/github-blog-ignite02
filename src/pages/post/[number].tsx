import { Box, Flex } from "@chakra-ui/react"
import axios, { AxiosResponse } from "axios"
import { GetServerSidePropsContext } from "next"
import ReactMarkdown from "react-markdown"
import { Issue, NextPageWithLayout } from "~/@types"
import { PostTitle } from "~/components/info/PostTitle"
import { PrimaryLayout } from "~/components/layouts/PrimaryLayout"
import { api } from "~/lib/axios"

interface IPost {
  postInfo: Issue
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  let postInfo = {} as AxiosResponse

  await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${query.number}`).then((response) => {
    postInfo = response
  }).catch(err => {
    postInfo = err
  })

  if (axios.isAxiosError(postInfo)) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      postInfo: postInfo.data || null
    }
  }

}

const Post: NextPageWithLayout<IPost> = ({ postInfo }) => {
  if (!postInfo) {
    return null
  }
  return (
    <Flex as="main" mt="-5rem" flexDir="column">
      <PostTitle issue={postInfo} />
      <Box p="2.25rem 2rem" >
        <ReactMarkdown>
          {postInfo.body}
        </ReactMarkdown>
      </Box>
    </Flex>
  )
}

export default Post

Post.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}


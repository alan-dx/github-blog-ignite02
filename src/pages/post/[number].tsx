import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"
import { Issue, NextPageWithLayout } from "~/@types"
import { PostTitle } from "~/components/info/PostTitle"
import { PrimaryLayout } from "~/components/layouts/PrimaryLayout"
import { api } from "~/lib/axios"

const Post: NextPageWithLayout = () => {
  const [post, setPost] = React.useState({} as Issue)

  const router = useRouter()
  const { number } = router.query

  console.log(post)

  React.useEffect(() => {
    async function loadPostData() {
      const postInfo = await api.get(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${number}`)
      setPost(postInfo.data)
    }

    if (number) {
      loadPostData()
    }

  }, [number])

  return (
    <Flex as="main" mt="-5rem" flexDir="column">
      <PostTitle issue={post} />
    </Flex>
  )
}

export default Post

Post.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}


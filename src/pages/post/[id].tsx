import { NextPageWithLayout } from "../../@types"
import { PrimaryLayout } from "../../components/layouts/PrimaryLayout"

const Post: NextPageWithLayout = () => {
  return (
    <>
      <h1>POST</h1>
    </>
  )
}

export default Post

Post.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}


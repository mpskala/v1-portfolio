import Container from '/components/Container'
import BlogPost from '/components/BlogPost'
import { GetPosts } from '/lib/getData'

const Blog = ({ posts }) => {
  return (
    <Container>
      <div className='flex flex-col items-start justify-center max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Blog
        </h1>
        <div className='mt-4'>
          {posts.map((post) => (
            <BlogPost
              className='group'
              key={post.title}
              slug={post.slug}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const data = await GetPosts()
  return {
    props: {
      posts: data.posts,
    },
  }
}

export default Blog

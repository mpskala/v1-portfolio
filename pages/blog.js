import Link from 'next/link'
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
        <p className='mb-4 text-gray-600 dark:text-gray-400'>
          I&apos;ve been writing online since 2014, mostly about web development
          and tech careers. In total, I&apos;ve written {posts.length} articles
          on my blog. Use the search below to filter by title.
        </p>
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

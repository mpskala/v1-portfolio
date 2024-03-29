import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { GetPostSlugs, GetPost } from '/lib/getData'
import Link from 'next/link'
import Container from '/components/Container'
import ProgressBar from '/components/ProgressBar'
import readingTime from 'reading-time'

const Arrow = () => {
  return (
    <Link href='/blog'>
      <a className='back-arrow flex items-center betterhover:hover:text-lightHighlight dark:group-hover:text-darkHighlight transition-colors duration-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7 16l-4-4m0 0l4-4m-4 4h18'
          />
        </svg>
        <span className='ml-2 uppercase tracking-wide'>BACK</span>
      </a>
    </Link>
  )
}

const formatDate = (date) => {
  return new Date(date).toLocaleString('en-gb', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const Post = ({ post, readingTime }) => {
  return (
    <Container title={`Matthew Skala — ${post.title}.`}>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <div className='back w-20 mb-4'>
          <Arrow />
        </div>

        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          {post.title}
        </h1>

        <div className='blog-image h-72 md:h-[36rem] w-full my-2 relative xl:max-w-none'>
          <Image
            src={post.coverImage.url}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>

        <div className='flex w-full justify-between items-center my-4'>
          <div className='flex items-center'>
            <Image
              className='rounded-full'
              src={post.author.avatar.url}
              width={40}
              objectFit='cover'
              height={40}
              alt=''
            />
            <p className='ml-4 text-lg font-semibold'>{post.author.name}</p>
          </div>
          <p className=''>
            {readingTime} • {formatDate(post.datePublished)}
          </p>
        </div>

        <div className='flex space-x-3 my-4'>
          {post.tags.map((tag) => (
            <span
              className='uppercase text-sm tracking-wide bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded-lg'
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <ProgressBar />

        <div className='prose prose-stone prose-xl dark:prose-invert max-w-none'>
          {post.description}
          <MDXRemote {...post.source} />
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await GetPost(params.slug)
  const source = await serialize(data.post.content)

  return {
    props: {
      post: { ...data.post, source },
      readingTime: readingTime(data.post.content).text,
    },
  }
}

export const getStaticPaths = async () => {
  const data = await GetPostSlugs()

  return {
    paths: data.posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: 'blocking',
  }
}

export default Post

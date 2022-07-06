import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { GetProjectSlugs, GetProject } from '/lib/getData'
import Link from 'next/link'
import Container from '/components/Container'

const Arrow = () => {
  return (
    <Link href='/projects'>
      <a className='back-arrow flex items-center betterhover:hover:text-highlight transition-colors duration-300'>
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
    month: 'short',
    year: 'numeric',
  })
}

const projectType = (type) => {
  switch (type) {
    case 'illustration':
      return 'Illustration'
    case 'web_design':
      return 'Web Design'
    case 'prototyping':
      return 'Prototyping'
    case 'ux_design':
      return 'UX Design'
  }
}

const mdxImage = ({ src, alt }) => {
  return (
    <span className='block h-[35rem] w-full xl:w-[55vw] xl:left-2/4 xl:-translate-x-2/4 my-5 relative xl:max-w-none'>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        className='rounded-xl'
      />
    </span>
  )
}

const Project = ({ project }) => {
  const components = {
    img: mdxImage,
  }
  return (
    <Container>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <div className='back w-20 mb-4'>
          <Arrow />
        </div>

        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          {project.title}
        </h1>

        <div className='blog-image h-[35rem] w-full xl:w-[60vw] xl:left-2/4 xl:-translate-x-2/4 my-5 relative xl:max-w-none'>
          <Image
            src={project.projectImage.url}
            alt=''
            layout='fill'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>

        <div className='flex w-full justify-between'>
          <div className='left'>
            <div className='project-client my-5'>
              <div className='tracking-[.15em] font-bold'>CLIENT</div>
              <div className='client-name'>{project.clientName}</div>
            </div>
            <div className='project-type my-5'>
              <div className='tracking-[.15em] font-bold'>PROJECT TYPE</div>
              <div className='type'>{projectType(project.projectType)}</div>
            </div>
            <div className='project-year my-5'>
              <div className='tracking-[.15em] font-bold'>PROJECT DATE</div>
              <div className='year'>
                {project.startDate === project.endDate
                  ? `${formatDate(project.startDate)}`
                  : `${formatDate(project.startDate)} - ${formatDate(
                      project.endDate
                    )}`}
              </div>
            </div>
          </div>
          <div className='right w-80 my-5'>
            <div className='description tracking-[.15em] font-bold'>
              PROJECT DESCRIPTION
            </div>
            {project.projectDescription}
          </div>
        </div>

        <div className='prose prose-stone prose-xl dark:prose-invert max-w-2xl mt-5'>
          {project.description}
          <MDXRemote {...project.source} components={components} />
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps = async ({ params }) => {
  const data = await GetProject(params.slug)
  const source = await serialize(data.project.projectContent)

  return {
    props: { project: { ...data.project, source } },
  }
}

export const getStaticPaths = async () => {
  const data = await GetProjectSlugs()

  return {
    paths: data.projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: 'blocking',
  }
}

export default Project

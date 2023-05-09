import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { GetProjectSlugs, GetProject } from '/lib/getData'
import Link from 'next/link'
import Container from '/components/Container'

const Arrow = () => {
  return (
    <Link href='/projects'>
      <a className='back-arrow flex items-center betterhover:hover:text-lightHighlight dark:betterhover:hover:text-darkHighlight transition-colors duration-300'>
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

        <h1 className='font-bold capitalize text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          {project.title}
        </h1>

        <div className='h-[75vh] my-5 w-full xl:w-[60vw] xl:left-2/4 xl:-translate-x-2/4 relative xl:max-w-none'>
          <Image
            src={project.projectImage.url}
            alt=''
            layout='fill'
            width='100%'
            height='100%'
            objectFit='cover'
            className='rounded-xl'
          />
        </div>

        <div className='md:flex w-full justify-between'>
          <div className='left'>
            {project.clientName ? (
              <div className='project-client my-5'>
                <div className='tracking-widest font-medium text-lg'>
                  CLIENT
                </div>
                <div className='client-name font-light'>
                  {project.clientName}
                </div>
              </div>
            ) : (
              ''
            )}

            <div className='project-type my-5'>
              <div className='tracking-widest font-medium text-lg'>
                PROJECT TYPE
              </div>
              <div className='type font-light capitalize'>
                {project.projectType.replace(/_/g, ' ')}
              </div>
            </div>
            <div className='project-year my-5'>
              <div className='tracking-widest font-medium text-lg'>
                PROJECT DATE
              </div>
              <div className='year font-light'>
                {project.startDate === project.endDate
                  ? `${formatDate(project.startDate)}`
                  : `${formatDate(project.startDate)} - ${formatDate(
                      project.endDate
                    )}`}
              </div>
            </div>
          </div>
          <div className='right w-80 mt-5 mb-10'>
            <div className='description tracking-widest font-medium text-lg'>
              PROJECT DESCRIPTION
            </div>
            <div className='font-light'>{project.projectDescription}</div>
          </div>
        </div>

        <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />

        <div className='xl:flex xl:flex-col justify-between w-full'>
          <div className='objective justify-between w-full'>
            <div className='tracking-wide text-3xl font-medium mb-2'>
              The Challenge
            </div>
            <div
              className='objective w-full font-light prose prose-xl dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: `${project.challenge.html}` }}
            />
          </div>

          <div className='objective justify-between w-full my-10'>
            <div className='tracking-wide text-3xl font-medium mb-2'>
              The Solution
            </div>
            <div
              className='objective w-full font-light prose prose-xl dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: `${project.solution.html}` }}
            />
          </div>

          <div className='objective justify-between w-full'>
            <div className='tracking-wide text-3xl font-medium mb-2'>
              The Impact
            </div>
            <div
              className='objective w-full font-light prose prose-xl dark:prose-invert'
              dangerouslySetInnerHTML={{ __html: `${project.results.html}` }}
            />
          </div>
        </div>

        <div className='objective justify-between w-full my-10'>
          <div className='tracking-wide text-3xl font-medium mb-2'>
            Scope of Work
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 prose dark:prose-invert'>
            {project.discovery ? (
              <div className='discovery'>
                <h3 className='font-medium'>Discovery</h3>
                {project.discovery.map((i) => (
                  <span className='block' key={i}>
                    {i}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {project.strategy ? (
              <div className='strategy'>
                <h3 className='font-medium'>Strategy</h3>
                {project.strategy.map((i) => (
                  <span className='block' key={i}>
                    {i.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {project.design ? (
              <div className='design'>
                <h3 className='font-medium'>Design</h3>
                {project.design.map((i) => (
                  <span className='block' key={i}>
                    {i.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {project.develop ? (
              <div className='develop'>
                <h3 className='font-medium'>Development</h3>
                {project.develop.map((i) => (
                  <span className='block' key={i}>
                    {i.replace(/_/g, ' ').replace(/0/g, '-')}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
            {project.launch ? (
              <div className='launch'>
                <h3 className='font-medium'>Launch</h3>
                {project.launch.map((i) => (
                  <span className='block' key={i}>
                    {i.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='prose font-light prose-xl dark:prose-invert max-w-2xl mt-5'>
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

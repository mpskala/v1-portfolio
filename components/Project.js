import Link from 'next/link'

const Project = ({ slug, title, description }) => {
  return (
    <Link href={`/project/${slug}`}>
      <a className='w-full group'>
        <div className='w-full mb-8'>
          <div className='flex flex-col justify-between md:flex-row'>
            <h4 className='w-full mb-2 capitalize text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100 group-hover:text-highlight transition-colors duration-300'>
              {title}
            </h4>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>{description}</p>
        </div>
      </a>
    </Link>
  )
}

export default Project

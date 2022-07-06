import Container from '/components/Container'
import Project from '/components/Project'
import { GetProjects } from '/lib/getData'

const Projects = ({ projects }) => {
  return (
    <Container title='Matthew Skala — Projects.'>
      <div className='flex flex-col items-start justify-center max-w-2xl mx-auto mb-16'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
          Projects
        </h1>
        <div className='mt-4'>
          {projects.map((project) => (
            <Project
              className='group'
              key={project.title}
              slug={project.slug}
              title={project.title}
              description={project.projectDescription}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const data = await GetProjects()
  return {
    props: {
      projects: data.projects,
    },
  }
}

export default Projects

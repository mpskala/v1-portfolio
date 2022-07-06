import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHCMS_URL)

export const GetPosts = async () => {
  const query = gql`
    query Posts {
      posts(stage: PUBLISHED) {
        slug
        title
        description
      }
    }
  `

  return await client.request(query)
}

export const GetPostSlugs = async () => {
  const query = gql`
    query PostSlugs {
      posts(stage: PUBLISHED) {
        slug
      }
    }
  `

  return await client.request(query)
}

export const GetPost = async (slug) => {
  const query = gql`
    query Post($slug: String!) {
      post(where: { slug: $slug }) {
        slug
        title
        description
        coverImage {
          url
        }
        content
        datePublished
        tags
        author {
          name
          avatar {
            url
          }
        }
      }
    }
  `
  const variables = {
    slug,
  }

  return await client.request(query, variables)
}

export const GetProjects = async () => {
  const query = gql`
    query Projects {
      projects(stage: PUBLISHED) {
        slug
        title
        projectDescription
      }
    }
  `

  return await client.request(query)
}

export const GetProjectSlugs = async () => {
  const query = gql`
    query ProjectSlugs {
      projects(stage: PUBLISHED) {
        slug
      }
    }
  `

  return await client.request(query)
}

export const GetProject = async (slug) => {
  const query = gql`
    query getProjects($slug: String!) {
      project(where: { slug: $slug }) {
        title
        slug
        projectDescription
        projectType
        projectImage {
          url
        }
        startDate
        endDate
        clientName
        projectContent
      }
    }
  `
  const variables = {
    slug,
  }

  return await client.request(query, variables)
}

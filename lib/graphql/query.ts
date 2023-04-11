import { gql } from "graphql-request";

export const QUERY = gql`
  query Concert {
    concerts(last: 4, orderBy: publishedAt_ASC) {
      id
      thumbnail {
        url
      }
      title
      slug
      city
      eventStage
      date
      description
      upcoming
    }
    brands {
      id
      thumbnail {
        url
      }
      title
      slug
      city
      eventStage
      date
      description
      upcoming
    }
  }
`;

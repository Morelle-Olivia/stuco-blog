import {gql} from "apollo-angular";

export const GET_ABOUT_PAGE = gql`
      query getAbout {
        blogs(where: {isAbout: true}, first:1) {
        id,
        title,
        sections {
          id,
          heading,
          content
        },
        heroImage {
            url
        }
        }
      }
      `

export const GET_MISSIONS = gql``;

import { graphql } from "@octokit/graphql";

async function getRepo() {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token ${token}`, // gh personal access token
    },
  });

  const { repository } = await graphqlWithAuth(`{
    repository(owner: "codestates-seb", name: "agora-states-fe") {
      discussions(first: 10) {
        edges {
          node {
            id
            createdAt
            title
            url
            bodyText
            createdAt
            id
            author {
              avatarUrl
              login
            }
            answer {
              author {
                avatarUrl
              }
              bodyText
              createdAt
            }
          }
        }
      }
    },
  }`);

  return repository;
}
export default getRepo;

import { graphql } from "@octokit/graphql";
// import { useState, useEffect } from "react";

async function getRepo() {
  const graphqlWithAuth = graphql.defaults({
    headers: {
      authorization: `token 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`,
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

import { GraphQLClient } from 'graphql-request';

const { REACT_APP_GRAPHCMS_AUTH_TOKEN } = process.env;
const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckq1bufyehsum01xdd6seegos/master';
const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: ` Bearer ${REACT_APP_GRAPHCMS_AUTH_TOKEN}`,
    },
});

export const Query = async (query, vars) => {
    const data = await graphQLClient.request(query, vars);
    return data;
};

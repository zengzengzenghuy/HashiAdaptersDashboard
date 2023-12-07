import React, { useReducer, useEffect } from 'react';

import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import endpoints from '../constants/subgraphEndpoints.json';
import { queryBlockHeaderAdapter } from '../constants/queryFormat';
const endpoint = endpoints[100]['block-header-adapter'];
const graphQLClient = new GraphQLClient(endpoint);

const fetchData = async () => {
  try {
    console.log(endpoint);
    const response = await graphQLClient.request(queryBlockHeaderAdapter);
    console.log('GraphQL Response:', response);
    return response;
  } catch (error) {
    throw new Error('Error fetching data from the API');
  }
};

export function useGetData() {
  return useQuery('get-data', fetchData, {
    staleTime: 10000, // 10 seconds (data considered fresh for 10 seconds)
    refetchInterval: 10000, // 10 seconds (automatic refetch every 10 seconds)
  });
}

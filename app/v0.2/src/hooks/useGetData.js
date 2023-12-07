import React, { useReducer, useEffect } from 'react';

import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import endpoints from '../constants/subgraphEndpoints.json';
import {
  queryGnosisGoerliBlockHeaderAdapter,
  queryETHGnosisRelayAndReporter,
  queryGnosisETHAdapter,
} from '../constants/queryFormat';

const fetchData = async () => {
  try {
    const ethEndpoint = endpoints[1].reporterAndRelay;
    const gnosisETHEndpoint = endpoints[100]['eth-adapter'];
    const gnosisGoerliEndpint = endpoints[100]['goerli-block-header-adapter'];

    const ethGraphQLClient = new GraphQLClient(ethEndpoint);
    const gnosisETHGraphQLClient = new GraphQLClient(gnosisETHEndpoint);
    const gnosisGoerGraphQLClient = new GraphQLClient(gnosisGoerliEndpint);

    const ethResponse = await ethGraphQLClient.request(
      queryETHGnosisRelayAndReporter
    );

    const gnosisETHResponse = await gnosisETHGraphQLClient.request(
      queryGnosisETHAdapter
    );
    const gnosisGoerResponse = await gnosisGoerGraphQLClient.request(
      queryGnosisGoerliBlockHeaderAdapter
    );

    const combinedResponse = {
      ...ethResponse,
      ...gnosisETHResponse,
      ...gnosisGoerResponse,
    };
    console.log('combined response ', combinedResponse);
    return combinedResponse;
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

import React, { useReducer, useEffect } from 'react';

import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import endpoints from '../constants/subgraphEndpoints.json';
import {
  queryGnosisGoerliBlockHeaderAdapter,
  queryETHGnosisRelayAndReporter,
  queryGnosisETHAdapter,
  queryPolygonETHAdapter,
  queryOptimismETHAdapter,
} from '../constants/queryFormat';

const addPrefixToObjectKeys = (obj, prefix) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value])
  );
};
const fetchData = async () => {
  try {
    const ethEndpoint = endpoints[1].reporterAndRelay;
    const gnosisETHEndpoint = endpoints[100]['eth-adapter'];
    const gnosisGoerliEndpint = endpoints[100]['goerli-block-header-adapter'];
    const polygonETHEndpoint = endpoints[137]['eth-adapter'];
    const optimismETHEndpoint = endpoints[10]['eth-adapter'];

    const ethGraphQLClient = new GraphQLClient(ethEndpoint);
    const gnosisETHGraphQLClient = new GraphQLClient(gnosisETHEndpoint);
    const gnosisGoerGraphQLClient = new GraphQLClient(gnosisGoerliEndpint);
    const polygonETHGraphQLClient = new GraphQLClient(polygonETHEndpoint);
    const optimismETHGraphQLClient = new GraphQLClient(optimismETHEndpoint);

    const ethResponse = await ethGraphQLClient.request(
      queryETHGnosisRelayAndReporter
    );

    let gnosisETHResponse = await gnosisETHGraphQLClient.request(
      queryGnosisETHAdapter
    );

    gnosisETHResponse = addPrefixToObjectKeys(gnosisETHResponse, 'gno');
    const gnosisGoerResponse = await gnosisGoerGraphQLClient.request(
      queryGnosisGoerliBlockHeaderAdapter
    );

    let polygonETHResponse = await polygonETHGraphQLClient.request(
      queryPolygonETHAdapter
    );
    polygonETHResponse = addPrefixToObjectKeys(polygonETHResponse, 'polygon');

    let optimismETHResponse = await optimismETHGraphQLClient.request(
      queryOptimismETHAdapter
    );
    optimismETHResponse = addPrefixToObjectKeys(
      optimismETHResponse,
      'optimism'
    );
    const combinedResponse = {
      ...ethResponse,
      ...gnosisETHResponse,
      ...gnosisGoerResponse,
      ...polygonETHResponse,
      ...optimismETHResponse,
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

import React, { useReducer, useEffect } from 'react';

import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
import endpoints from '../constants/subgraphEndpoints.json';
import {
  queryETHGnosisRelayAndReporter,
  queryGnosisETHAdapter,
  queryPolygonETHAdapter,
  queryOptimismETHAdapter,
  queryArbitrumETHAdapter,
  queryAvalancheETHAdapter,
  queryGoerliGnosisBlockHeader,
  queryGnosisGoerliBlockHeaderAdapter,
  queryGoerliGnosisMessageRelay,
} from '../constants/queryFormat';

const addPrefixToObjectKeys = (obj, prefix) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`${prefix}${key}`, value])
  );
};
const fetchData = async () => {
  try {
    // Mainnet
    const ethEndpoint = endpoints[1].reporterAndRelay;
    const gnosisETHEndpoint = endpoints[100]['eth-adapter'];
    const polygonETHEndpoint = endpoints[137]['eth-adapter'];
    const optimismETHEndpoint = endpoints[10]['eth-adapter'];
    const arbitrumETHEndpoint = endpoints[42161]['eth-adapter'];
    const avalancheETHEndpoint = endpoints[43114]['eth-adapter'];

    // Testnet
    const goerliGnosisBHEndpoint = endpoints[5]['block-header-reporter'];
    // const goerliGnosisMREndpoint = endpoints[5]['message-relay-reporter'];
    const gnosisGoerliEndpint = endpoints[100]['goerli-block-header-adapter'];

    const ethGraphQLClient = new GraphQLClient(ethEndpoint);
    const gnosisETHGraphQLClient = new GraphQLClient(gnosisETHEndpoint);
    const gnosisGoerGraphQLClient = new GraphQLClient(gnosisGoerliEndpint);

    const polygonETHGraphQLClient = new GraphQLClient(polygonETHEndpoint);
    const optimismETHGraphQLClient = new GraphQLClient(optimismETHEndpoint);
    const arbitrumETHGraphQLClient = new GraphQLClient(arbitrumETHEndpoint);
    const avalancheETHGraphQLClient = new GraphQLClient(avalancheETHEndpoint);
    const goerliGnoBHGraphQLClient = new GraphQLClient(goerliGnosisBHEndpoint);
    // const goerliGnoMRGraphQLClient = new GraphQLClient(goerliGnosisMREndpoint);

    const ethResponse = await ethGraphQLClient.request(
      queryETHGnosisRelayAndReporter
    );

    let gnosisETHResponse = await gnosisETHGraphQLClient.request(
      queryGnosisETHAdapter
    );

    gnosisETHResponse = addPrefixToObjectKeys(gnosisETHResponse, 'gno');

    const goerliGnoBHResponse = await goerliGnoBHGraphQLClient.request(
      queryGoerliGnosisBlockHeader
    );

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

    let arbitrumETHResponse = await arbitrumETHGraphQLClient.request(
      queryArbitrumETHAdapter
    );
    arbitrumETHResponse = addPrefixToObjectKeys(
      arbitrumETHResponse,
      'arbitrum'
    );

    let avalancheETHResponse = await avalancheETHGraphQLClient.request(
      queryAvalancheETHAdapter
    );

    avalancheETHResponse = addPrefixToObjectKeys(
      avalancheETHResponse,
      'avalanche'
    );

    const combinedResponse = {
      ...ethResponse,
      ...gnosisETHResponse,
      ...polygonETHResponse,
      ...optimismETHResponse,
      ...arbitrumETHResponse,
      ...avalancheETHResponse,
      ...goerliGnoBHResponse,
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
    staleTime: 30000, // 60 seconds (data considered fresh for 60 seconds)
    refetchInterval: 30000, // 60 seconds (automatic refetch every 60 seconds)
  });
  // return useQuery('get-data', fetchData);
}

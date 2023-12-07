import { gql } from 'graphql-request';
export const queryBlockHeaderAdapter = gql`
  query {
    ambheaderAdapterHashStoreds(first: 100) {
      id
      AMBAdapter_id
      hashes
      blockNumber
      transactionHash
      blockTimestamp
    }
    telepathyHeaderAdapterHashStoreds(first: 100) {
      id
      TelepathyAdapter_id
      hashes
      blockNumber
      transactionHash
      blockTimestamp
    }
  }
`;

export const queryMessageRelay = gql`
  query {
    dispatchedMessages(first: 5) {
      id
      messageId
      fromAddress
      toAddress
      blockTimestamp
      transactionHash
      blockTimestamp
    }
    ambmessageRelayeds(first: 5) {
      id
      AMBRelayer_id
      emitter
      messageId
      transactionHash
      blockTimestamp
    }
  }
`;

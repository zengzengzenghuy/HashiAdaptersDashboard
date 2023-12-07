import { gql } from 'graphql-request';

export const queryGnosisETHAdapter = gql`
  query {
    ambbhhashStoreds {
      id
      blockNumberStored
      hashes
      blockTimestamp
      transactionHash
    }
    ambmrhashStoreds {
      id
      messageId
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    telepathyBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockTimestamp
      transactionHash
    }
    connextBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockTimestamp
      transactionHash
    }
    sygmaBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockTimestamp
      transactionHash
    }
  }
`;

export const queryETHGnosisRelayAndReporter = gql`
  query {
    headerReporteds {
      id
      emitter
      blockNumberReported
      blockHeader
      blockNumber
      blockTimestamp
      transactionHash
    }
    messageRelayeds {
      id
      emitter
      messageId
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;
export const queryGnosisGoerliBlockHeaderAdapter = gql`
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

export const queryGoerliGnosisMessageRelay = gql`
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

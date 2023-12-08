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

export const queryPolygonETHAdapter = gql`
  {
    telepathyBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    axelarBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    celerBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;
export const queryOptimismETHAdapter = gql`
  {
    axelarBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    telepathyBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    optimismBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    optimismMRHashStoreds {
      id
      messageId
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const queryArbitrumETHAdapter = gql`
  query {
    telepathyBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      transactionHash
    }
    axelarBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      transactionHash
    }
  }
`;

export const queryAvalancheETHAdapter = gql`
  query {
    ccipbhhashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
    layerZeroBHHashStoreds {
      id
      blockNumberStored
      hashes
      blockNumber
      blockTimestamp
      transactionHash
    }
  }
`;

export const queryGnosisGoerliBlockHeaderAdapter = gql`
  query {
    ambheaderAdapterHashStoreds {
      id
      AMBAdapter_id
      hashes
      blockNumber
      transactionHash
      blockTimestamp
    }
    telepathyHeaderAdapterHashStoreds {
      id
      TelepathyAdapter_id
      hashes
      blockNumber
      transactionHash
      blockTimestamp
    }
  }
`;

export const queryGoerliGnosisBlockHeader = gql`
  query {
    goerliAMBHeaderReporteds {
      id
      emitter
      blockNumberStored
      blockHeader
      blockNumber
      blockTimestamp
      transactionHash
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

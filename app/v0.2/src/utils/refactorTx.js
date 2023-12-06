import { timestampToDate } from './utils';
export function refactorTx(data) {
  const factoredData = [];

  if (Object.hasOwn(data, 'ambheaderAdapterHashStoreds')) {
    data.ambheaderAdapterHashStoreds.forEach(item => {
      factoredData.push({
        id: item.AMBAdapter_id,
        type: 'Block Header',
        adapter: 'AMB',
        primaryData: item.blockNumber,
        secondaryData: item.hashes,
        destinationChain: {
          txHash: item.transactionHash,
          timestamp: timestampToDate(item.blockTimestamp),
          chainId: 'Gnosis Chain',
        },
        sourceChain: {
          txHash: '',
          chainId: 'Goerli',
          timestamp: '',
        },
      });
    });
  }
  if (Object.hasOwn(data, 'telepathyHeaderAdapterHashStoreds')) {
    data.telepathyHeaderAdapterHashStoreds.forEach(item => {
      factoredData.push({
        id: item.TelepathyAdapter_id,
        type: 'Block Header',
        adapter: 'Telepathy',
        primaryData: item.blockNumber,
        secondaryData: item.hashes,
        destinationChain: {
          txHash: item.transactionHash,
          timestamp: timestampToDate(item.blockTimestamp),
          chainId: 'Gnosis Chain',
        },
        sourceChain: {
          txHash: '',
          chainId: 'Goerli',
          timestamp: '',
        },
      });
    });
  }
  factoredData.sort((a, b) => {
    const dateA = a.destinationChain.timestamp;
    const dateB = b.destinationChain.timestamp;

    if (dateA > dateB) {
      return -1;
    }
    if (dateA < dateB) {
      return 1;
    }
    return 0;
  });
  return factoredData;
}

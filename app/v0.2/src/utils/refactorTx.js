import { timestampToDate } from './utils';
import addresses from '../constants/address.json';
export function findAEmitter(chainId, address) {
  switch (chainId) {
    case '1': {
      const obj = addresses['1'];

      for (const key in obj) {
        if (obj[key].toLowerCase() === address) {
          if (key.toLowerCase().includes('amb'))
            return 'AMB'; // TODO: amb is not detected properly
          else if (key.toLowerCase().includes('connext')) return 'Connext';
          else if (key.toLowerCase().includes('sygma')) return 'Sygma';
          else if (key.toLowerCase().includes('ccip')) return 'CCIP';
          else if (key.toLowerCase().includes('axelar')) return 'Axelar';
          else if (key.toLowerCase().includes('celer')) return 'Celer';
          else if (key.toLowerCase().includes('lz')) return 'LayerZero';
          else if (key.toLowerCase().includes('hyperlane')) return 'Hyperlane';
          else if (key.toLowerCase().includes('telepathy')) return 'Telepathy';
        }
      }
      break;
    }
    case '5': {
      const obj = addresses['5'];
      for (const key in obj) {
        if (obj[key].toLowerCase() === address) {
          if (key.toLowerCase().includes('amb')) return 'AMB';
        }
      }
      break;
    }
    case '100': {
      return '';
    }
  }
}
export function refactorTx(data) {
  const factoredData = [];

  if (Object.hasOwn(data, 'goerliAMBHeaderReporteds')) {
    data.goerliAMBHeaderReporteds.forEach(item => {
      factoredData.push({
        id: item.id,
        type: 'Block Header',
        adapter: findAEmitter('5', item.emitter),
        primaryData: item.blockNumberStored,
        secondaryData: item.blockHeader,
        destinationChain: {
          txHash: '',
          timestamp: '',
          chainId: '',
        },
        sourceChain: {
          txHash: item.transactionHash,
          chainId: 'Goerli',
          timestamp: timestampToDate(item.blockTimestamp),
        },
      });
    });

    if (Object.hasOwn(data, 'ambheaderAdapterHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.ambheaderAdapterHashStoreds.find(
          hashStored => hashStored.AMBAdapter_id === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Gnosis Chain';
        }
      });
    }
  }
  if (Object.hasOwn(data, 'telepathyHeaderAdapterHashStoreds')) {
    data.telepathyHeaderAdapterHashStoreds.forEach(item => {
      factoredData.push({
        id: item.id,
        type: 'Block Header',
        adapter: 'Telepathy',
        primaryData: item.TelepathyAdapter_id,
        secondaryData: item.hashes,
        destinationChain: {
          txHash: item.transactionHash,
          timestamp: timestampToDate(item.blockTimestamp),
          chainId: 'Gnosis Chain',
        },
        sourceChain: {
          txHash: 'N/A',
          chainId: 'Goerli',
          timestamp: 'N/A',
        },
      });
    });
  }
  if (Object.hasOwn(data, 'headerReporteds')) {
    data.headerReporteds.forEach(item => {
      factoredData.push({
        id: item.id,
        type: 'Block Header',
        adapter: findAEmitter('1', item.emitter),
        primaryData: item.blockNumberReported,
        secondaryData: item.blockHeader,
        destinationChain: {
          txHash: '',
          timestamp: '',
          chainId: '',
        },
        sourceChain: {
          txHash: item.transactionHash,
          chainId: 'Ethereum',
          timestamp: timestampToDate(item.blockTimestamp),
        },
      });
    });
    if (Object.hasOwn(data, 'gnoambbhhashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.gnoambbhhashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Gnosis Chain';
        }
      });
    }
    if (Object.hasOwn(data, 'gnotelepathyBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.gnotelepathyBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Gnosis Chain';
        }
      });
    }
    if (Object.hasOwn(data, 'gnoconnextBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.gnoconnextBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Gnosis Chain';
        }
      });
    }
    if (Object.hasOwn(data, 'gnosygmaBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.gnosygmaBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Gnosis Chain';
        }
      });
    }
    if (Object.hasOwn(data, 'polygonaxelarBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.polygonaxelarBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Polygon';
        }
      });
    }
    if (Object.hasOwn(data, 'polygoncelerBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.polygoncelerBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Polygon';
        }
      });
    }
    if (Object.hasOwn(data, 'polygontelepathyBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.polygontelepathyBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Polygon';
        }
      });
    }
    if (Object.hasOwn(data, 'optimismoptimismBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.optimismoptimismBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Optimism';
        }
      });
    }
    if (Object.hasOwn(data, 'optimismtelepathyBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.optimismtelepathyBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Optimism';
        }
      });
    }
    if (Object.hasOwn(data, 'optimismaxelarBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.optimismaxelarBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Optimism';
        }
      });
    }
    if (Object.hasOwn(data, 'arbitrumaxelarBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.arbitrumaxelarBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Artitrum';
        }
      });
    }
    if (Object.hasOwn(data, 'arbitrumtelepathyBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.arbitrumtelepathyBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Arbitrum';
        }
      });
    }
    if (Object.hasOwn(data, 'avalancheccipbhhashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.avalancheccipbhhashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Avalanche';
        }
      });
    }
    if (Object.hasOwn(data, 'avalanchelayerZeroBHHashStoreds')) {
      factoredData.forEach(item => {
        const primaryData = item.primaryData;
        const matchingObject = data.avalanchelayerZeroBHHashStoreds.find(
          hashStored => hashStored.blockNumberStored === primaryData
        );
        if (matchingObject) {
          item.destinationChain.txHash = matchingObject.transactionHash;
          item.destinationChain.timestamp = timestampToDate(
            matchingObject.blockTimestamp
          );
          item.destinationChain.chainId = 'Avalanche';
        }
      });
    }
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

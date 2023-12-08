import { useState, useContext, useMemo } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaCopy } from 'react-icons/fa6';

import Table from './Table';
import { ellipse } from '../../utils/utils';
import { DataContext } from '../../providers/DataProvider';
import ethlogo from '../../public/chains/ethereum.png';
import gnosisLogo from '../../public/chains/gnosis.png';
import optimismLogo from '../../public/chains/optimism.png';
import polygonLogo from '../../public/chains/polygon.png';
import arbitrumLogo from '../../public/chains/arbitrum.png';
import avalancheLogo from '../../public/chains/avalanche.png';
import goerliLogo from '../../public/chains/goerli.png';
import binanceLogo from '../../public/chains/binance.png';

const getChainLogo = chainId => {
  switch (chainId) {
    case 'Ethereum':
      return ethlogo;

    case 'Gnosis Chain':
      return gnosisLogo;

    case 'Optimism':
      return optimismLogo;

    case 'Polygon':
      return polygonLogo;

    case 'Arbitrum':
      return arbitrumLogo;

    case 'Avalanche':
      return avalancheLogo;
    case 'Goerli':
      return goerliLogo;
    default:
      return gnosisLogo;
  }
};

const getExplorerURL = (chainId, txHash) => {
  switch (chainId) {
    case 'Ethereum':
      return `https://etherscan.io/tx/${txHash}`;

    case 'Gnosis Chain':
      return `https://gnosisscan.io/tx/${txHash}`;

    case 'Optimism':
      return `https://optimistic.etherscan.io/tx/${txHash}`;

    case 'Polygon':
      return `https://polygonscan.com/tx/${txHash}`;

    case 'Arbitrum':
      return `https://arbiscan.io/tx/${txHash}`;

    case 'Avalanche':
      return `https://subnets.avax.network/c-chain/tx/${txHash}`;
    case 'Goerli':
      return `https://goerli.etherscan.io/tx/${txHash}`;
    default:
      return `https://etherscan.io/tx/${txHash}`;
  }
};

export default function TransactionTable() {
  const { data, loading, error } = useContext(DataContext);
  const [copiedRowId, setCopiedRowId] = useState(null);
  // const [txData, setTxData] = useState([]);

  const handleCopyClick = (dataToCopy, rowId) => {
    navigator.clipboard
      .writeText(dataToCopy)
      .then(() => {
        setCopiedRowId(rowId);
        setTimeout(() => {
          setCopiedRowId(null);
        }, 2000);
      })
      .catch(error => {
        console.error('Unable to copy to clipboard', error);
      });
  };

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  if (error) {
    return <p className="text-white">Error...{error}</p>;
  }
  const columns = [
    {
      id: '2',
      header: 'Type',
      accessor: 'type',
      width: 200,
      Cell: props => {
        const { row } = { ...props };
        const { type } = { ...row.original };
        return (
          <div className="w-[100px]">
            <p>{type}</p>
          </div>
        );
      },
    },
    {
      id: '3',
      header: 'Adapter',
      accessor: 'adapter',
      Cell: props => {
        const { row } = { ...props };
        const { adapter } = { ...row.original };
        return <div className="w-[80px]">{adapter}</div>;
      },
    },
    {
      id: '5',
      header: 'Source Chain',
      accessor: row =>
        `${row.sourceChain.txHash} ${row.sourceChain.chainId} ${row.sourceChain.timestamp}`,
      width: 400,
      Cell: props => {
        const { row } = { ...props };
        const { timestamp, chainId, txHash } = {
          ...row.original.sourceChain,
        };
        return (
          <div className="space-y-1.5 mb-3 w-[250px]">
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white  font-mono">{timestamp}</p>
            </div>
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white font-mono"> {chainId}</p>
              <img
                src={getChainLogo(chainId)}
                className="rounded-full w-5 h-5"
              />
            </div>
            <div className="h-7 flex items-center  justify-startspace-x-2">
              <a
                href={getExplorerURL(chainId, txHash)}
                className="text-white font-mono"
              >
                {ellipse(txHash)}
              </a>
              <HiExternalLink />
            </div>
          </div>
        );
      },
    },
    {
      id: '6',
      header: 'Destination Chain',
      accessor: row =>
        `${row.destinationChain.txHash} ${row.destinationChain.chainId} ${row.destinationChain.timestamp}`,
      width: 400,
      Cell: props => {
        const { value, row } = { ...props };
        const { timestamp, chainId, txHash } = {
          ...row.original.destinationChain,
        };
        return (
          <div className="space-y-1.5 mb-3 w-[250px]">
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white  font-mono">{timestamp}</p>
            </div>
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white  font-mono"> {chainId}</p>
              <img
                src={getChainLogo(chainId)}
                className="rounded-full w-5 h-5"
              />
            </div>
            <div className="h-7 flex items-center justify-start space-x-2">
              <a
                href={getExplorerURL(chainId, txHash)}
                className="text-white font-mono"
              >
                {ellipse(txHash)}
              </a>
              <HiExternalLink />
            </div>
          </div>
        );
      },
    },
    {
      id: '7',
      header: 'Data',
      accessor: row => `${row.primaryData} ${row.secondaryData}`,
      width: 100,
      Cell: props => {
        const { row } = { ...props };
        const isCurrentRowCopied = row.id === copiedRowId;
        return (
          <div className="space-y-1.5 mb-3">
            {row.original.type === 'Block Header' ? (
              <div className="w-[250px] ">
                <div className="h-7 flex items-center justify-start space-x-2 ">
                  <p className="text-white  font-mono">
                    {'Block: ' + row.original.primaryData}
                  </p>
                </div>
                <div className="h-7 flex items-center justify-start space-x-2">
                  <p className="text-white  font-mono">
                    {'Header: ' + ellipse(row.original.secondaryData)}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleCopyClick(row.original.secondaryData, row.id)
                  }
                >
                  <FaCopy />
                </button>
                {isCurrentRowCopied && (
                  <span className="text-green-500 ml-2">Copied!</span>
                )}{' '}
              </div>
            ) : (
              <div>
                <div className="h-7 flex items-center justify-start space-x-2 ">
                  <p className="text-white  font-mono">{'To: '}</p>
                </div>
                <div className="h-7 flex items-center justify-start space-x-2 ">
                  <p className="text-white  font-mono">{'Calldata: '}</p>
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} data={data} />;
}

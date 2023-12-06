import { useState, useContext } from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaCopy } from 'react-icons/fa6';

import Table from './Table';
import { ellipse } from '../../utils/utils';
import { DataContext } from '../../providers/DataProvider';
import ethlogo from '../../public/chains/ethereum.png';
import gnosisLogo from '../../public/chains/gnosis.png';

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

  const columns = [
    {
      id: '1',
      header: 'ID',
      accessor: 'id',
      width: 100,
      Cell: props => {
        const { row } = { ...props };
        const { hashID } = { ...row.original };
        return (
          <div className="w-[20px]">
            <p>{ellipse(hashID)}</p>
          </div>
        );
      },
    },
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
        const { timestamp, chainId, txHash } = { ...row.original.sourceChain };
        return (
          <div className="space-y-1.5 mb-3 w-[250px]">
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white  font-mono">{timestamp}</p>
            </div>
            <div className="h-7 flex items-center justify-start space-x-2">
              <p className="text-white font-mono"> {chainId}</p>
              <img src={ethlogo} className="rounded-full w-5 h-5" />
            </div>
            <div className="h-7 flex items-center  justify-startspace-x-2">
              <a
                href={'https://etherscan.io/tx/' + { txHash }}
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
              <img src={gnosisLogo} className="rounded-full w-5 h-5" />
            </div>
            <div className="h-7 flex items-center justify-start space-x-2">
              <a
                href={'https://etherscan.io/tx/' + { txHash }}
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

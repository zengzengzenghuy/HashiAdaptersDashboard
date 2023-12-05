import { useMemo, useState, useContext, useEffect } from 'react';
import { HiExternalLink } from 'react-icons/hi';

import Table from './Table';
import { ellipse } from '../../utils/utils';
import { DataContext } from '../../providers/DataProvider';
import ethlogo from '../../public/chains/ethereum.png';
import gnosisLogo from '../../public/chains/gnosis.png';

export default function TransactionTable() {
  const { data, loading, error } = useContext(DataContext);

  if (data) {
    console.log('has data', data);
  } else {
    console.log('error from Table', error);
  }
  // const formateDate = timestamp => {
  //   const date = new Date(timestamp);
  //   return date.toLocaleDateString('en', {
  //     timeStyle: 'medium',
  //     dateStyle: 'short',
  //   });
  // };
  const columns = [
    {
      id: '1',
      header: 'ID',
      accessor: 'id',
      Cell: props => {
        const { value, row } = { ...props };
        const { hashID } = { ...row.original };
        return (
          <div>
            <p>{ellipse(hashID)}</p>
          </div>
        );
      },
    },
    {
      id: '2',
      header: 'Type',
      accessor: 'type',
      Cell: props => {
        const { value, row } = { ...props };
        const { type } = { ...row.original };
        return (
          <div>
            <p>{type}</p>
          </div>
        );
      },
    },
    { id: '3', header: 'Adapter', accessor: 'adapter' },
    {
      id: '5',
      header: 'Source Chain',
      accessor: 'sourceChain',
      Cell: props => {
        const { value, row } = { ...props };
        const { timestamp, chainId, txHash } = { ...row.original.sourceChain };
        return (
          <div className="space-y-1.5 mb-3">
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
      accessor: 'destinationChain',
      Cell: props => {
        const { value, row } = { ...props };
        const { timestamp, chainId, txHash } = {
          ...row.original.destinationChain,
        };
        return (
          <div className="space-y-1.5 mb-3">
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
      accessor: 'data',
      Cell: props => {
        const { row } = { ...props };
        return (
          <div className="space-y-1.5 mb-3">
            {row.original.type === 'Block Header' ? (
              <div>
                <div className="h-7 flex items-center justify-start space-x-2 ">
                  <p className="text-white  font-mono">
                    {'Block: ' + row.original.primaryData}
                  </p>
                </div>
                <div className="h-7 flex items-center justify-start space-x-2 ">
                  <p className="text-white  font-mono">
                    {'Header: ' + row.original.secondaryData}
                  </p>
                </div>
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
  // const headerColumns = useMemo(() => columns);
  if (data) {
    console.log('dataTabl ', data);
  }
  if (loading) {
    return <p className="text-white">Loading...</p>;
  }
  const [txdata, setTxData] = useState(data);
  useEffect(() => {
    setTxData(data);
    console.log('data from table ', txdata);
  }, [data]);
  return <Table columns={columns} data={data} />;
  // return <></>;
}

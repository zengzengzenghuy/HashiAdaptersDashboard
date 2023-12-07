import { useState, useEffect } from "react";
import queryQL from "./query.json";
// import {getBuiltGraphSDK} from '../.graphclient'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// const sdk = getBuiltGraphSDK()
interface adapterDataTpe {
  blockNumber: any;
  hash: any;
}
let telepathy: adapterDataTpe[] = [];
let amb: adapterDataTpe[] = [];
let dendrETH: adapterDataTpe[] = [];
let sygma: adapterDataTpe[] = [];
function App() {
  const [common, setCommon] = useState<any[]>([]);
  const findCommon = (
    arr1: adapterDataTpe[],
    arr2: adapterDataTpe[],
    arr3: adapterDataTpe[],
    arr4: adapterDataTpe[]
  ) => {
    let commonArr: adapterDataTpe[] = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (
          arr1[i].blockNumber === arr2[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr1[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr1[i].hash)
        ) {
          commonArr.push(arr1[i]);
       
        }
      }
    }
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr3.length; j++) {
        if (
          arr1[i].blockNumber === arr3[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr1[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr1[i].hash)
        ) {
          commonArr.push(arr1[i]);
         
        }
      }
    }
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr4.length; j++) {
        if (
          arr1[i].blockNumber === arr4[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr1[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr1[i].hash)
        ) {
          commonArr.push(arr1[i]);
        
        }
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr3.length; j++) {
        if (
          arr2[i].blockNumber === arr3[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr2[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr2[i].hash)
        ) {
          commonArr.push(arr2[i]);
  
        }
      }
    }
    for (let i = 0; i < arr2.length; i++) {
      for (let j = 0; j < arr4.length; j++) {
        if (
          arr2[i].blockNumber === arr4[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr2[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr2[i].hash)
        ) {
       
          commonArr.push(arr2[i]);
    
        }
      }
    }
    for (let i = 0; i < arr3.length; i++) {
      for (let j = 0; j < arr4.length; j++) {
        if (
          arr3[i].blockNumber === arr4[j].blockNumber &&
          !commonArr.some((obj) => obj.blockNumber === arr3[i].blockNumber) &&
          !commonArr.some((obj) => obj.hash === arr3[i].hash)
        ) {
          commonArr.push(arr3[i]);
     
        }
      }
    }

    setCommon(commonArr);
  };
  const fetchQuery = () => {
    return axios.post(
      "https://api.studio.thegraph.com/query/49446/adaptersfromgoerli/v0.0.1",
      { query: queryQL.query },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  };
  const result = useQuery(["adapterQuery"], fetchQuery);

  const { data, isLoading, refetch } = result;

  useEffect(()=>{
    refetch;
    findCommon(amb, telepathy, dendrETH, sygma)
  },[])
  const tableStyle = {
    border: "1px solid black",
  };
  return (
    <>
      <h1>Adapters Dashboard - Built for <a href="https://docs.gnosischain.com/bridges/hashi/">Hashi</a></h1>
      <h3>
        This dashboard shows the most recent block hash stored by Hashi adapters in
        Gnosis Chain.
        <br/>
        The block is from Goerli. Please verify the block in <a href="https://goerli.etherscan.io/">goerli.etherscan</a>
      </h3>

      <p>Valid Block: Block number of Goerli that has passed threshold (2 out of 4) from adapters</p>
     
      <p>
        <button
          type="button"
          onClick={() => {
            refetch;
            findCommon(amb, telepathy, dendrETH, sygma);
          
          }}
          disabled={isLoading}
          style={{ backgroundColor: "#4CAF50" }}
        >
          Refresh
        </button>
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableStyle}>Valid Block</th>
              <th style={tableStyle}>Block Hash</th>
            </tr>
          </thead>
          <tbody>
            {common &&
              common.map((data, index) => {
                return (
                  <tr key={index}>
                    <td style={tableStyle}> {data.blockNumber}</td>
                    <td style={tableStyle}>{data.hash}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        
      </div>

      <h2>Blocks stored by each adapters (first 100)</h2>
      <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableStyle}>Telepathy</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data.data.hashStoreds?.map((data: any) => {
                  telepathy.push({
                    blockNumber: data.TelepathyAdapter_id,
                    hash: data.hashes,
                  });
                  return (
                    <tr key={data.id}>
                      <td style={tableStyle}>{data.TelepathyAdapter_id}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableStyle}>DendrETH</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data.data.dendrETHAdapterHashStoreds?.map(
                  (data: any) => {
                    dendrETH.push({
                      blockNumber: data.DendrETHAdapter_id,
                      hash: data.hashes,
                    });
                    return (
                      <tr key={data.id}>
                        <td style={tableStyle}>{data.DendrETHAdapter_id}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableStyle}>AMB</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data.data.ambadapterHashStoreds?.map(
                  (data: any) => {
                    amb.push({
                      blockNumber: data.AMBAdapter_id,
                      hash: data.hashes,
                    });
                    return (
                      <tr key={data.id}>
                        <td style={tableStyle}>{data.AMBAdapter_id}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableStyle}>Sygma</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.data.data.sygmaAdapterHashStoreds?.map(
                  (data: any) => {
                    sygma.push({
                      blockNumber: data.SygmaAdapter_id,
                      hash: data.hashes,
                    });
                    return (
                      <tr key={data.id}>
                        <td style={tableStyle}>{data.SygmaAdapter_id}</td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
        </div>
    </>
  );
}

export default App;

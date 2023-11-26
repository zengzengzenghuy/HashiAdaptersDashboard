import { useState } from "react";

const TransactionBar = () =>{

    const transaction=[{
        txHash: "0x39b7f12b8cd8aa7ea03fde30ebce8fc7ddcb289840c35c92d4a5a8c6c0b0b578",
        type: "BlockHeader",
        adapter: "AMB",
        timestamp: "23 seconds ago",
        Path: "ETH->GC",
        data: "291128",
        View: "Click"
    },
    {
        txHash: "0x39b7f12b8cd8aa7ea03fde30ebce8fc7ddcb289840c35c92d4a5a8c6c0b0b578",
        type: "MessageRelay",
        adapter: "AMB",
        timestamp: "55 seconds ago",
        Path: "ETH->GC",
        data: "0x234ab93",
        View: "Click"
    },
    {
        txHash: "0x39b7f12b8cd8aa7ea03fde30ebce8fc7ddcb289840c35c92d4a5a8c6c0b0b578",
        type: "MessageRelay",
        adapter: "Sygma",
        timestamp: "1 min ago",
        Path: "ETH->GC",
        data: "0x7234ad",
        View: "Click"
    }] 

    const [tx,setTx] = useState(transaction)
    return(
        
        <div className="flex flex-column w-full justify-center pt-10">
 
           <table className="table-fixed border-collapse border border-slate-400 ">
            <thead>
                <tr key={"header"} >
                    {Object.keys(tx[0]).map((key)=>(
                    <th className="px-5 border border-slate-300">{key}</th>
                 ))}
                </tr>
                </thead>
                <tbody>
                {
                    tx.map((item)=>(
                        <tr key={item.txHash}>
                            {Object.values(item).map((val)=>(
                                <td className=" border border-slate-300">{val}</td>
                            ))}
                        </tr>
                    )
                    )
                }
                </tbody>
           </table>
            
         </div>
      
    )
}

export default TransactionBar;

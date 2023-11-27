
import { Bytes, log, ethereum  } from "@graphprotocol/graph-ts";
import { AMBMessageRelayed, WormholeMessageRelayed, OptimismMessageRelayed} from "../generated/schema";
import {MessageDispatched} from "../generated/Yaho/Yaho"

export function handleMessageDispatched(event: MessageDispatched): void {
    // keccak256(MessageRelayed(address,uint256))
    const MessageRelayedTopic = Bytes.fromHexString(
        '0x1ec56558159131145cca16f5f6dfa0cb00baed662a177d318d8bcb00b751820d')
    const WormholeMessageRelayAddress =
        "0x0948402853a87a21Af501073CE47105f453Ac994"
    const AMBMessageRelayAddress = 
        "0x2433c921152B3dE133F96762a9b359D02dB34c93"
    const OptimismMessageRelayAddress = 
        "0x8448E15d0e706C0298dECA99F0b4744030e59d7d"
    const transactionHash = event.transaction.hash;
    const timestamp = event.block.timestamp;
    const messageId = event.params.messageId;
    const fromAddress = event.params.from;
    const toChainId = event.params.toChainId;
    const toAddress = event.params.to;
    const dispatchData = event.params.data;
    const receipt: ethereum.TransactionReceipt | null = event.receipt;
    
    if(!receipt){
        log.error(
            "MessageDispatched event: No receipt found for transaction {}",
            [transactionHash.toHexString()]
          );
        return;
    }else{
        const log: ethereum.Log[] = receipt.logs
        for(let i=0; i<log.length; i++){
            if(log[i].topics[0]=== MessageRelayedTopic){
                const emitter = log[i].topics[1]
                if(emitter.toHexString() === AMBMessageRelayAddress){

                    let ambMessageRelayer = new AMBMessageRelayed(event.transaction.hash.concatI32(log[i].logIndex.toI32()))
    
                    ambMessageRelayer.emitter = emitter
                    ambMessageRelayer.messageId = messageId
                    ambMessageRelayer.fromAddress =  fromAddress
                    ambMessageRelayer.toAddress = toAddress
                    ambMessageRelayer.toChainId = toChainId
                    ambMessageRelayer.dispatchData = dispatchData
                    ambMessageRelayer.blockTimestamp = timestamp
                    ambMessageRelayer.transactionHash = transactionHash

                    ambMessageRelayer.save()
                }
                else if(emitter.toHexString() === WormholeMessageRelayAddress){
                        let whMessageRelayer = new WormholeMessageRelayed(event.transaction.hash.concatI32(log[i].logIndex.toI32()))
    
                        whMessageRelayer.emitter = fromAddress
                        whMessageRelayer.messageId = messageId
                        whMessageRelayer.fromAddress = fromAddress
                        whMessageRelayer.toAddress = toAddress
                        whMessageRelayer.toChainId = toChainId
                        whMessageRelayer.dispatchData = dispatchData
                        whMessageRelayer.blockTimestamp = timestamp
                        whMessageRelayer.transactionHash = transactionHash
    
                        whMessageRelayer.save()
                    
                }
                else if(emitter.toHexString() === OptimismMessageRelayAddress){
                    let opMessageRelayer = new OptimismMessageRelayed(event.transaction.hash.concatI32(log[i].logIndex.toI32()))
                   
                        opMessageRelayer.emitter = fromAddress
                        opMessageRelayer.messageId = messageId
                        opMessageRelayer.fromAddress = fromAddress
                        opMessageRelayer.toAddress = toAddress
                        opMessageRelayer.toChainId = toChainId
                        opMessageRelayer.dispatchData = dispatchData
                        opMessageRelayer.blockTimestamp = timestamp
                        opMessageRelayer.transactionHash = transactionHash
    
                        opMessageRelayer.save()


                }
             
            }

        }

        return;
    }
}
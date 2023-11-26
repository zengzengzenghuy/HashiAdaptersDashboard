
import { Bytes, dataSource, log } from "@graphprotocol/graph-ts";
import {MessageDispatched} from "../generated/Yaho/Yaho"
export function handleMessageDispatched(event: MessageDispatched): void {
    const transactionHash = event.transaction.hash;
    const timestamp = event.block.timestamp;
    const messageId = event.params.messageId;
    const fromAddress = event.params.fromAddress;
    const toAddress = event.params.toAddress;
    const toChainId = event.params.toChainId;
    const dispatchData = event.params.dispatchData;
    const fromChain = dataSource.network();
    const receipt = event.receipt;

    if(!receipt){
        log.error(
            "MessageDispatched event: No receipt found for transaction {}",
            [transactionHash.toHexString()]
          );
        return;
    }

    // return message relayer type
    let messageRelayer = getMessageRelayer(fromAddress)
    messageRelayer.emitter = fromAddress
    messageRelayer.messageId = messageId
    messageRelayer.fromAddress = fromAddress
    messageRelayer.toAddress = toAddress
    messageRelayer.toChainId = toChainId
    messageRelayer.dispatchData = dispatchData
    messageRelayer.blockTimestamp = timestamp
    messageRelayer.transactionHash = transactionHash

    transactionHash.save()
}
import { MessageRelayed as MessageRelayedEvent } from "../generated/L1CrossDomainMessengerMessageRelay/L1CrossDomainMessengerMessageRelay";
import { MessageRelayed } from "../generated/schema";

export function handleMessageRelayed(event: MessageRelayedEvent): void {
  let entity = new MessageRelayed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.emitter = event.params.emitter;
  entity.messageId = event.params.messageId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

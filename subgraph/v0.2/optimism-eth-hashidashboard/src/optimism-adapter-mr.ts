import { HashStored as HashStoredEvent } from "../generated/L2CrossDomainMessengerMRAdapter/L2CrossDomainMessengerAdapter";
import { OptimismMRHashStored } from "../generated/schema";

export function handleHashStored(event: HashStoredEvent): void {
  let entity = new OptimismMRHashStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.messageId = event.params.id;
  entity.hashes = event.params.hashes;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

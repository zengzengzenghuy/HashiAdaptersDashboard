import { HashStored as HashStoredEvent } from "../generated/AxelarAdapter/AxelarAdapter";
import { AxelarBHHashStored } from "../generated/schema";

export function handleHashStored(event: HashStoredEvent): void {
  let entity = new AxelarBHHashStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.blockNumberStored = event.params.id;
  entity.hashes = event.params.hashes;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

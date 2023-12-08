import { HeaderReported as HeaderReportedEvent } from "../generated/AMBHeaderReporter/AMBHeaderReporter";
import { GoerliAMBHeaderReported } from "../generated/schema";

export function handleHeaderReported(event: HeaderReportedEvent): void {
  let entity = new GoerliAMBHeaderReported(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.emitter = event.params.emitter;
  entity.blockNumberStored = event.params.blockNumber;
  entity.blockHeader = event.params.blockHeader;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

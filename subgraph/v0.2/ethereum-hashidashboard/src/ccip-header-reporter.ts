import { HeaderReported as HeaderReportedEvent } from "../generated/CCIPHeaderReporter/CCIPHeaderReporter";
import { HeaderReported } from "../generated/schema";

export function handleHeaderReported(event: HeaderReportedEvent): void {
  let entity = new HeaderReported(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.emitter = event.params.emitter;
  entity.blockNumberReported = event.params.blockNumber;
  entity.blockHeader = event.params.blockHeader;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

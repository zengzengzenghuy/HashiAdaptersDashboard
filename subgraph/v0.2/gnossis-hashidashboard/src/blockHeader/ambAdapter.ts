import { HashStored as HashStoredEvent } from "../../generated/AMBAdapter/AMBAdapter"
import { AMBHeaderAdapterHashStored } from "../../generated/schema"

export function handleBlockHashStored(event: HashStoredEvent): void {
  let entity = new AMBHeaderAdapterHashStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.AMBAdapter_id = event.params.id
  entity.hashes = event.params.hashes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

import { HashStored as HashStoredEvent } from "../../generated/TelepathyAdapter/TelepathyAdapter"
import { TelepathyHeaderAdapterHashStored } from "../../generated/schema"

export function handleBlockHashStored(event: HashStoredEvent): void {
  let entity = new TelepathyHeaderAdapterHashStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.TelepathyAdapter_id = event.params.id
  entity.hashes = event.params.hashes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

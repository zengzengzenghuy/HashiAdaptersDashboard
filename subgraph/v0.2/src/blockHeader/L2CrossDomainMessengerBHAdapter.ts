import { HashStored as HashStoredEvent } from "../../generated/L2CrossDomainMessengerBHAdapter/L2CrossDomainMessengerBHAdapter"
import { OptimismeHeaderAdapterHashStored } from "../../generated/schema"

export function handleHashStored(event: HashStoredEvent): void {
  let entity = new OptimismeHeaderAdapterHashStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.OptimismAdapter_id = event.params.id
  entity.hashes = event.params.hashes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}


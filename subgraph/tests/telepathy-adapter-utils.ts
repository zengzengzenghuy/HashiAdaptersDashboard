import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { HashStored } from "../generated/TelepathyAdapter/TelepathyAdapter"

export function createHashStoredEvent(id: BigInt, hashes: Bytes): HashStored {
  let hashStoredEvent = changetype<HashStored>(newMockEvent())

  hashStoredEvent.parameters = new Array()

  hashStoredEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  hashStoredEvent.parameters.push(
    new ethereum.EventParam("hashes", ethereum.Value.fromFixedBytes(hashes))
  )

  return hashStoredEvent
}

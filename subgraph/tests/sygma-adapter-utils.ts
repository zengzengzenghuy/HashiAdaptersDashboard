import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  HashStored,
  ReporterSet,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/SygmaAdapter/SygmaAdapter"

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

export function createReporterSetEvent(
  reporterAddress: Address,
  chainID: BigInt,
  enabled: boolean
): ReporterSet {
  let reporterSetEvent = changetype<ReporterSet>(newMockEvent())

  reporterSetEvent.parameters = new Array()

  reporterSetEvent.parameters.push(
    new ethereum.EventParam(
      "reporterAddress",
      ethereum.Value.fromAddress(reporterAddress)
    )
  )
  reporterSetEvent.parameters.push(
    new ethereum.EventParam(
      "chainID",
      ethereum.Value.fromUnsignedBigInt(chainID)
    )
  )
  reporterSetEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return reporterSetEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

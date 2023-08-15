import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { HashStored } from "../generated/schema"
import { HashStored as HashStoredEvent } from "../generated/AMBAdapter/AMBAdapter"
import { handleHashStored } from "../src/amb-adapter"
import { createHashStoredEvent } from "./amb-adapter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let hashes = Bytes.fromI32(1234567890)
    let newHashStoredEvent = createHashStoredEvent(id, hashes)
    handleHashStored(newHashStoredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("HashStored created and stored", () => {
    assert.entityCount("HashStored", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "HashStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hashes",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

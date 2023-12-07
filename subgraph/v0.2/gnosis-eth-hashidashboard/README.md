# Gnosis subgraph

Source: Ethereum  
Contracts listened:

| AMB Adapter - Header Report | [0x4efB95c26bB2ebD3281749A5eAA388bc302b4445](https://gnosisscan.io/address/0x4efB95c26bB2ebD3281749A5eAA388bc302b4445#code) |
| AMB Adapter - Message Relay | [0x4dD1EFf3047DFD9F0a4ED9864263c818374A9b98](https://gnosisscan.io/address/0x4dD1EFf3047DFD9F0a4ED9864263c818374A9b98#readContract) |
| TelepathyAdapter | [0xDeF29f44f8315d0079A25EF03cfB0b0D8CdA3cF8](https://gnosisscan.io/address/0xDeF29f44f8315d0079A25EF03cfB0b0D8CdA3cF8) |
| ConnextAdapter - Header Report | [0x33769bD29c8982CDE01357A1Db7d5029a68E7786](https://gnosisscan.io/address/0x33769bD29c8982CDE01357A1Db7d5029a68E7786) |
| SygmaAdapter - Header Report | [0x483285D0e24401D0C5DB6cF1FAC4f79f412079C0](https://gnosisscan.io/address/0x483285D0e24401D0C5DB6cF1FAC4f79f412079C0) |

Endpoint: https://api.studio.thegraph.com/query/59639/gnosis-eth-hashidashboard/version/latest

Query

```
{
  ambbhhashStoreds {
    id
    blockNumberStored
    hashes
    blockTimestamp
    transactionHash
  }
  ambmrhashStoreds {
    id
    messageId
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
  telepathyBHHashStoreds{
    id
    blockNumberStored
    hashes
    blockTimestamp
    transactionHash
  }
  connextBHHashStoreds{
    id
    blockNumberStored
    hashes
    blockTimestamp
    transactionHash
  }
  sygmaBHHashStoreds{
    id
    blockNumberStored
    hashes
    blockTimestamp
    transactionHash
  }
}
```

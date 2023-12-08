# Arbitrum - ETH

Contracts listened:

1. Telepathy Block Header Adapter: `0x2E5685F20f42cC3b01e4A9ADE49F6848E242f022`
2. Axelar Block Header Adapter: `0x6E9ce437c46e7fA4F0888c21AAC0d9099Ad133ea`

Endpoint: `https://api.studio.thegraph.com/query/59639/arbitrum-eth-hashidashboard/version/latest`

Query:

```
{
  telepathyBHHashStoreds{
    id
    blockNumberStored
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
  axelarBHHashStoreds {
    id
    blockNumberStored
    hashes
    blockNumber
     blockTimestamp
    transactionHash
  }
}
```

# Optimism - ETH

Contract listened:

1. Axelar Block Header Adapter: `0x6E9ce437c46e7fA4F0888c21AAC0d9099Ad133ea`
2. Telepathy Block Header Adapter: `0x856dcc80f75a9737D9D498266E1Af013668316Fb`
3. Optimism Block Header Adapter: `0xe58E7bF7aCD1396D8F9eAF44DB3D4Fd055DCDb51`
4. Optimism Message Relay Adapter: `0xA144726ED8825E0EEbc126DeDF34FFCc00c03938`

Endpoint: `https://api.studio.thegraph.com/query/59639/optimism-eth-hashidashboard/version/latest`

Query:

```
{
  axelarBHHashStoreds {
    id
    blockNumberStored
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
  telepathyBHHashStoreds{
    id
    blockNumberStored
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
  optimismBHHashStoreds{
       id
    blockNumberStored
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
  optimismMRHashStoreds{
    id
    messageId
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

Result:

```
{
  "data": {
    "axelarBHHashStoreds": [
      {
        "id": "0x7efe781d160217a2053e8e7c6265c4364322e8412e2ab5168cbe976415f077fe06000000",
        "blockNumberStored": "18541851",
        "hashes": "0x48a4baddd120dc1948ac2e2debdbfcded40e6695c96936a92db037fadbae25a0",
        "blockNumber": "112333841",
        "blockTimestamp": "1700266459",
        "transactionHash": "0x7efe781d160217a2053e8e7c6265c4364322e8412e2ab5168cbe976415f077fe"
      }
    ],
    "telepathyBHHashStoreds": [],
    "optimismBHHashStoreds": [
      {
        "id": "0x5ec48f0ec8cd9d939ce67b18c930e38e629313eec034a36169e8dde47c6f0af200000000",
        "blockNumberStored": "18641562",
        "hashes": "0x0c381e4b4f1a4e2535fbbee2263b2709e9500950c74c7d30c08bd866cec9067e",
        "blockNumber": "112615151",
        "blockTimestamp": "1700829079",
        "transactionHash": "0x5ec48f0ec8cd9d939ce67b18c930e38e629313eec034a36169e8dde47c6f0af2"
      }
    ],
    "optimismMRHashStoreds": []
  }
}

```

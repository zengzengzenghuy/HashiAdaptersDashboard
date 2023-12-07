# Polygon - ETH

Contract listened:

1. Telepathy Block Header Adapter: ``
2. Axelar Block Header Adapter: ``
3. Celer Block Header Adapter: ``

Endpoint: `https://api.studio.thegraph.com/query/59639/polygon-eth-hashidashboard/version/latest`

Query:

```
{
  telepathyBHHashStoreds {
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
  celerBHHashStoreds{
        id
    blockNumberStored
    hashes
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

Result

```
{
  "data": {
    "telepathyBHHashStoreds": [],
    "axelarBHHashStoreds": [
      {
        "id": "0x52f039fe95ed81cb5d086fbec80a2b8aada06f2f7b134e7e2971a0c4299369c4b2000000",
        "blockNumberStored": "18541851",
        "hashes": "0x48a4baddd120dc1948ac2e2debdbfcded40e6695c96936a92db037fadbae25a0",
        "blockNumber": "49775649",
        "blockTimestamp": "1699624644",
        "transactionHash": "0x52f039fe95ed81cb5d086fbec80a2b8aada06f2f7b134e7e2971a0c4299369c4"
      }
    ],
    "celerBHHashStoreds": [
      {
        "id": "0x1f7cf63f86f208ea740f0bccab2bd5fc13d85a1c4abc5c9b72b7bed54b26de593f010000",
        "blockNumberStored": "18664559",
        "hashes": "0x740f253669b7a22fd3d54c0b3f32be3eeb4fb8c34882a821fbb165d728805b2a",
        "blockNumber": "50528396",
        "blockTimestamp": "1701253136",
        "transactionHash": "0x1f7cf63f86f208ea740f0bccab2bd5fc13d85a1c4abc5c9b72b7bed54b26de59"
      },
      {
        "id": "0xe2f674699eda55ec8caf721599e63030330ed4c1f7335713cdc11c4d518ab3af24010000",
        "blockNumberStored": "18668252",
        "hashes": "0x998ff489a989f7d1f212129ffdec67bec47fecde7cced81cc6cce602a782b3db",
        "blockNumber": "50528397",
        "blockTimestamp": "1701253138",
        "transactionHash": "0xe2f674699eda55ec8caf721599e63030330ed4c1f7335713cdc11c4d518ab3af"
      }
    ]
  }
}
```

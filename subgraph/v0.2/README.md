# Subgraph

## Events

### Block Header Reporter

Destination Chain:

- HashStored(uint256 indexed id, bytes32 indexed hashes)

### Message Relay:

Source Chain:

- MessageDispatched(indexed bytes32 messageId,indexed address from,indexed uint256 toChainId,address to,bytes data)
- MessageRelayed(address indexed emitter, uint256 indexed messageId);

## Routes & Adapters

### Block Header Reporter

Goerli -> Gnosis Chain

1. AMB Adapter
2. Telepathy Adapter

### Message Relay:

Goerli -> Gnosis Chain:

1. AMB Adapter

Goerli -> Optimism Goerli

1. L2 Optimism Adapter

Goerli -> BSC Testnet

1. Wormhole Adapter

Ethereum -> Multiple Chains

## Subgraph endpoints

1. Gnosis Chain

   - https://api.studio.thegraph.com/query/59639/gnossis-hashidashboard/v0.0.1
   - Type: Block Header
   - Route: Goerli->Gnosis

2. Goerli

   - https://api.studio.thegraph.com/query/59639/goerlimessagerelay-hashidashbo/v0.0.1
   - Type Message Relay
   - Route: Goerli->Gnosis,Optimism Goerli, BSC Testnet

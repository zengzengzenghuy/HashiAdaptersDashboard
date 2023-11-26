# Subgraph

## Events

Block Header Reporter
Source Chain:

- HeaderReported(address indexed emitter, uint256 indexed blockNumber, bytes32 indexed blockHeader)

Destination Chain, (light client based):

- HashStored(uint256 indexed id, bytes32 indexed hashes)

Message Relay:
Source Chain:

- MessageRelayed(address indexed emitter, uint256 indexed messageId);

## Addresses

Block Header Reporter
Goerli -> Gnosis Chain

1. AMB Adapter
2. Telepathy Adapter

Goerli -> Optimism Goerli

1. L2 Optimism Adapter

Goerli -> BSC Testnet

1. Wormhole Adapter

Ethereum -> Multiple Chains

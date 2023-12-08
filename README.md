# Hashi Adapters Dashboard

URL: https://hashi-dashboard-v2-app-b46lm.ondigitalocean.app/

## Supported Networks

### Mainnet

**Source**: Ethereum  
**Destination**: Gnosis Chain, Polygon, BNB(WIP), Optimism, Arbitrum, Avalanche
**Adapter**: Gnosis AMB, Chainlink CCIP, Axelar, Connext, Optimism Bridge, Layer Zero, Hyperlane, Sygma, Celer, Telepathy(Light Client), Wormhole(WIP)
**Type**: Block Header, Message Relay(WIP)

### Testnet

Source: Goerli
Destination: Gnosis Chain

For more details about, check out [deployment](https://hashi-doc.gitbook.io/hashi/v0.1/deployment#v0.1)

## Run the dashboard

`yarn add`

`yarn run dev`

## Functionalities

1. Transaction Details: Type, Adapter, Source and Destination chain details\*\*, block number and the block header data respectively.
2. Filter: Filter the transaction by typing the keyword in Search bar, or select the filter dropdowns. You can reset the filter by selecting **Reset** button.

\*\* Light Client based adapter(i.e. Telepathy) don't require transaction initiated from source chain, hence in this situation the source chain detail will show N/A.
\*\* Apart from the reason above, some transactions will have empty field on destiantion chain, it is because the events listened from subgraph on destination chain adapter contracts don't match with the source chain reporter contract. It is being investigated.

## Reference

1. Hashi docs: https://hashi-doc.gitbook.io/
2. Hashi github: https://github.com/gnosis/hashi

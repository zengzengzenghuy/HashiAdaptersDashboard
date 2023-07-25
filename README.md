# Hashi Adapters Dashboard

This dashboard shows the most recent blocks that has passed threshold from ShoyuBashi. It also shows the block stored by each adapters.

## Architecture

Data source: `HashStored()` event is queried by Subgraph and fetched using GraphQL endpoint https://api.studio.thegraph.com/query/49446/adaptersfromgoerli/v0.0.1.

Frontend: Vite + React

[GraphClient](https://github.com/graphprotocol/graph-client/tree/main): (to fix) Error when running `yarn graphclient build`.

## Run the dashboard

`yarn add`

`yarn run dev`

## Functionalities

Click **Refresh** button to fetch the most recent 100 blocks stored by each adapters and compute the blocks that has reached threshold (2 out of 4) that are considered valid.

## Reference

1. Hashi docs: https://docs.gnosischain.com/bridges/hashi/
2. Hashi github: https://github.com/gnosis/hashi

# Goerli - Gnosis Message Relay

Contract Listened:

1. Yaho: `0xFD1040bb141696c3CeB74B6BaA3Aaf9fAD97099C`

Adapter listened:

1. Wormhole message relay: `0x0948402853a87a21Af501073CE47105f453Ac994`
2. AMB Message relay: `0x2433c921152B3dE133F96762a9b359D02dB34c93`
3. Optimism Message relay: `0x8448E15d0e706C0298dECA99F0b4744030e59d7d`

Query:

```
{
  dispatchedMessages {
    id
    messageId
    fromAddress
    toAddress

  }
  ambmessageRelayeds {
    id
    AMBRelayer_id
    emitter
    messageId
    fromAddress
    toAddress
    toChainId
    dispatchData
    blockTimestamp
    TransactionHash
  }
    wormholeMessageRelayeds {
    id
    AMBRelayer_id
    emitter
    messageId
    fromAddress
    toAddress
    toChainId
    dispatchData
    blockTimestamp
    TransactionHash
  }
    optimismMessageRelayeds {
    id
    AMBRelayer_id
    emitter
    messageId
    fromAddress
    toAddress
    toChainId
    dispatchData
    blockTimestamp
    TransactionHash
  }
}
```

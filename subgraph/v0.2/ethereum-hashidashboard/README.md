# Ethereum

Contracts listened:

| AMB Header Reporter | [0x6be796cb66CdB3566b8AbebA2C516CbDF93fE831](https://etherscan.io/address/0x6be796cb66CdB3566b8AbebA2C516CbDF93fE831#code) |
| AMB Message Relay | [0x6E9ce437c46e7fA4F0888c21AAC0d9099Ad133ea](https://etherscan.io/address/0x6E9ce437c46e7fA4F0888c21AAC0d9099Ad133ea#code) |
| AxelarHeaderReporter - BNB Chain | [0xBfd877753F8B4f4117a08aD54DcBE69cF3165d81](https://etherscan.io/address/0xBfd877753F8B4f4117a08aD54DcBE69cF3165d81) |
|WormholeHeaderReporter(WIP) | [0xDeF29f44f8315d0079A25EF03cfB0b0D8CdA3cF8](https://etherscan.io/address/0xDeF29f44f8315d0079A25EF03cfB0b0D8CdA3cF8) |
| WormholeMessageRelay | [0x99a6e939bF0a491A16Dd58eC4abF9746073B88E2](https://etherscan.io/address/0x99a6e939bF0a491A16Dd58eC4abF9746073B88E2) |
| L1CrossDomainMessengerHeaderReporter… | [0xbA5B3f0643582E75AF252e7631dE62c046970167](https://etherscan.io/address/0xbA5B3f0643582E75AF252e7631dE62c046970167) |
| L1CrossDomainMessengerMessageRelay… | [0x171C1161bCde7adB32a9Ca92c412d39bE6F97C59](https://etherscan.io/address/0x171C1161bCde7adB32a9Ca92c412d39bE6F97C59) |
| ConnextHeaderReporter - Gnosis | [0x05816eB7De1615C7DD5A5Ad30385fd8F7Ca52D3e](https://etherscan.io/address/0x05816eB7De1615C7DD5A5Ad30385fd8F7Ca52D3e) |
| CelerHeaderReporter - Polygon | [0x52258b83051B7031483740aC9EcAa07926392ea0](https://etherscan.io/address/0x52258b83051B7031483740aC9EcAa07926392ea0) |
| LayerZeroHeaderReporter - Avalanche | [0x16B43E348e0A19E9196ae79D172aDC52B3Aa3E20](https://etherscan.io/address/0x16B43E348e0A19E9196ae79D172aDC52B3Aa3E20) |
| HyperlaneHeaderReporter - BNB Chain | [0xA98748087c6a96c05704faF1bf08cAdB63Dd48c1](https://etherscan.io/address/0xA98748087c6a96c05704faF1bf08cAdB63Dd48c1) |
| CCIPHeaderReporter - Avalanche | [0xeEFD0D67E4eF9330870961C38a3e25ECE369B141](https://etherscan.io/address/0xeEFD0D67E4eF9330870961C38a3e25ECE369B141) |
| SygmaHeaderReporter - Gnosis | [0x973bB99db211755b80c9087fe436fBb81A45AD5E](https://etherscan.io/address/0x973bB99db211755b80c9087fe436fBb81A45AD5E) |

Endpoint: https://api.studio.thegraph.com/query/59639/ethereum-hashidashboard/version/latest

Query:

```
{
    headerReporteds{
        id
        emitter
        blockNumberReported
        blockHeader
        blockNumber
        blockTimestamp
        transactionHash
  }
    messageRelayeds{
        id
        emitter
        messageId
        blockNumber
        blockTimestamp
        transactionHash
  }
}
```

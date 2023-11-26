export function getMessageRelayer(event): void {
    const emitter = event.params.fromAddress
    const id = event.transaction.hash.concatI32(event.logIndex.toI32())

    switch (emitter){
        case ${AMBMessageRelay}:
            return new AMBMessageRelayed(id)
        case ${WormholeMessageRelay}:
            return new WormholeMessageRelayed(id)
        case ${OptimismMessageRelay}:
            return new OptimismMessageRelayed(id)
        default:
            return undefined
    }


}
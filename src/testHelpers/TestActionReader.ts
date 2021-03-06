import { AbstractActionReader } from "../AbstractActionReader"
import { Block } from "../interfaces"

export class TestActionReader extends AbstractActionReader {
  public blockchain: Block[] = []
  public _testLastIrreversible: number = 0

  public get _blockHistory() {
    return this.blockHistory
  }

  public get _lastIrreversibleBlockNumber() {
    return this.lastIrreversibleBlockNumber
  }

  public async getHeadBlockNumber(): Promise<number> {
    return this.blockchain[this.blockchain.length - 1].blockInfo.blockNumber
  }

  public async getLastIrreversibleBlockNumber(): Promise<number> {
    if (this._testLastIrreversible) {
      return this._testLastIrreversible
    }
    return this.getHeadBlockNumber()
  }

  public async getBlock(blockNumber: number): Promise<Block> {
    return this.blockchain[blockNumber - 1]
  }
}

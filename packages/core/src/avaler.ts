import type { Chew, Swallow, Vomit } from './interface'

export class Avaler<S = any> {
  swallow: Swallow<S>
  chew: Chew
  vomit: Vomit
  constructor(swallow: Swallow<S>, chew: Chew, vomit: Vomit) {
    this.swallow = swallow
    this.chew = chew
    this.vomit = vomit
  }

  setData(data: S) {
    this.swallow.setData(data)
    return this
  }

  writeReqBody() {
    const fieldDataList = this.swallow.getReqBodyFieldDataList()
    const formatData = this.chew.formatReqBody(fieldDataList, this.swallow.getApiName())
    this.vomit.outputReqBody(formatData, this.swallow)
    return this
  }

  writeReqQuery() {
    const fieldDataList = this.swallow.getReqQueryFieldDataList()
    const formatData = this.chew.formatReqQuery(fieldDataList, this.swallow.getApiName())
    this.vomit.outputReqQuery(formatData, this.swallow)
    return this
  }

  writeReqParams() {
    const fieldDataList = this.swallow.getReqParamsFieldDataList()
    const formatData = this.chew.formatReqParams(fieldDataList, this.swallow.getApiName())
    this.vomit.outputReqParams(formatData, this.swallow)
    return this
  }

  writeResBody() {
    const fieldDataList = this.swallow.getResBodyFieldDataList()
    const formatData = this.chew.formatResBody(fieldDataList, this.swallow.getApiName())
    this.vomit.outputResBody(formatData, this.swallow)
    return this
  }

  writeAll() {
    return this
      .writeReqBody()
      .writeReqParams()
      .writeReqQuery()
      .writeResBody()
  }
}

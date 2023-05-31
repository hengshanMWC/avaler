import type { Chew, Swallow, Vomit } from './interface'

export class Avaler<S = any> {
  swallow: Swallow<S>
  chew: Chew
  vomit: Vomit
  constructor(swallow: Swallow<S>, chew: Chew, vomit: Vomit, data: S) {
    this.swallow = swallow.setData(data)
    this.chew = chew
    this.vomit = vomit
  }

  setData(data: S) {
    this.swallow.setData(data)
    return this
  }

  writeReqBody() {
    const fieldDataList = this.swallow.getReqBodyFieldDataList()
    const formatData = this.chew.formatReqBody(fieldDataList, this.swallow)
    this.vomit.outputReqBody(formatData)
    return this
  }

  writeReqQuery() {
    const fieldDataList = this.swallow.getReqQueryFieldDataList()
    const formatData = this.chew.formatReqQuery(fieldDataList, this.swallow)
    this.vomit.outputReqQuery(formatData)
    return this
  }

  writeReqParams() {
    const fieldDataList = this.swallow.getReqParamsFieldDataList()
    const formatData = this.chew.formatReqParams(fieldDataList, this.swallow)
    this.vomit.outputReqParams(formatData)
    return this
  }

  writeResBody() {
    const fieldDataList = this.swallow.getResBodyFieldDataList()
    const formatData = this.chew.formatResBody(fieldDataList, this.swallow)
    this.vomit.outputResBody(formatData)
    return this
  }

  writeResHeaders() {
    const fieldDataList = this.swallow.getResHeadersFieldDataList()
    const formatData = this.chew.formatResHeaders(fieldDataList, this.swallow)
    this.vomit.outputResHeaders(formatData)
    return this
  }
}

export interface FieldData {
  key?: string
  value: string
  description?: string
  isMandatory: boolean
  children?: FieldData[]
}

export interface Swallow<T = any> {
  setData: (data: T) => this
  getApiUrl: () => string
  getApiName: () => string
  getApiTitle: () => string
  getApiDescribe: () => string
  getMethod: () => string
  getReqBodyFieldDataList: () => FieldData[]
  getReqQueryFieldDataList: () => FieldData[]
  getReqParamsFieldDataList: () => FieldData[]
  getResBodyFieldDataList: () => FieldData[]
  getResHeadersFieldDataList: () => FieldData[]
}

export interface Chew {
  formatReqBody: (list: FieldData[], apiName: string) => string
  formatReqQuery: (list: FieldData[], apiName: string) => string
  formatReqParams: (list: FieldData[], apiName: string) => string
  formatResBody: (list: FieldData[], apiName: string) => string
  formatResHeaders: (list: FieldData[], apiName: string) => string
}

export interface Vomit {
  outputReqBody: (data: string) => this
  outputReqQuery: (data: string) => this
  outputReqParams: (data: string) => this
  outputResBody: (data: string) => this
  outputResHeaders: (data: string) => this
}

// export interface DataMap {

// }

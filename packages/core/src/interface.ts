export interface FieldData {
  key?: string
  value: string
  description?: string
  isMandatory: boolean
  children?: FieldData[]
}

export interface Swallow<T = any, S = any> {
  data: S
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
}

export interface Chew {
  formatReqBody: (list: FieldData[], apiName: string) => string
  formatReqQuery: (list: FieldData[], apiName: string) => string
  formatReqParams: (list: FieldData[], apiName: string) => string
  formatResBody: (list: FieldData[], apiName: string) => string
}

export interface Vomit {
  outputReqBody: (data: string, swallow: Swallow) => this
  outputReqQuery: (data: string, swallow: Swallow) => this
  outputReqParams: (data: string, swallow: Swallow) => this
  outputResBody: (data: string, swallow: Swallow) => this
}

// export interface DataMap {

// }

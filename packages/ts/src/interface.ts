export interface FieldData {
  key: string
  value: string
  description?: string
  isMandatory: boolean
  children?: FieldData[]
}

export interface Swallow<T = any> {
  setData: (data: T) => this
  getApiUrl: () => string
  getMethod: () => string
  getReqBodyFieldDataList: () => FieldData[]
  getReqQueryFieldDataList: () => FieldData[]
  getReqParamsFieldDataList: () => FieldData[]
  getResBodyFieldDataList: () => FieldData[]
  getResHeadersFieldDataList: () => FieldData[]
}

export interface Chew {
  formatReqBody: (data: FieldData[], swallow: Swallow) => string
  formatReqQuery: (data: FieldData[], swallow: Swallow) => string
  formatReqParams: (data: FieldData[], swallow: Swallow) => string
  formatResBody: (data: FieldData[], swallow: Swallow) => string
  formatResHeaders: (data: FieldData[], swallow: Swallow) => string
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

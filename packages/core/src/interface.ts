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
  getReqFormFieldDataList: () => FieldData[]
  getReqBodyFieldDataList: () => FieldData[]
  getReqQueryFieldDataList: () => FieldData[]
  getReqParamsFieldDataList: () => FieldData[]
  getResBodyFieldDataList: () => FieldData[]
}

export interface Chew {
  formatReqForm: (list: FieldData[], apiName: string) => string
  formatReqBody: (list: FieldData[], apiName: string) => string
  formatReqQuery: (list: FieldData[], apiName: string) => string
  formatReqParams: (list: FieldData[], apiName: string) => string
  formatResBody: (list: FieldData[], apiName: string) => string
}

export interface Vomit {
  outputReqForm: (data: string, swallow: Swallow) => this
  outputReqBody: (data: string, swallow: Swallow) => this
  outputReqQuery: (data: string, swallow: Swallow) => this
  outputReqParams: (data: string, swallow: Swallow) => this
  outputResBody: (data: string, swallow: Swallow) => this
}

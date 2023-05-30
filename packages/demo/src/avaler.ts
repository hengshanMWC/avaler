export interface FieldData {
  key: string
  value: string
  description?: string
  isMandatory: boolean
  children?: FieldData[]
}
export interface Avaler {
  getReqName: () => string
  getMethod: () => string
  getReqBodyFieldDataList: () => FieldData[]
  getReqQueryFieldDataList: () => FieldData[]
  getReqParamsFieldDataList: () => FieldData[]
  getResHeadersFieldDataList: () => FieldData[]
}

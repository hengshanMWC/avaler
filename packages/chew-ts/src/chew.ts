import type { Chew, FieldData } from 'avaler-core'
import { getIndentation } from './utils'
export class ChewTypeScript implements Chew {
  formatReqBody(list: FieldData[], apiName: string) {
    return getFormatString(list, `${apiName}ReqBody`)
  }

  formatReqParams(list: FieldData[], apiName: string) {
    return getFormatString(list, `${apiName}ReqParams`)
  }

  formatReqQuery(list: FieldData[], apiName: string) {
    return getFormatString(list, `${apiName}ReqQuery`)
  }

  formatResBody(list: FieldData[], apiName: string) {
    return getFormatString(list, `${apiName}ResBody`)
  }

  formatResHeaders(list: FieldData[], apiName: string) {
    return getFormatString(list, `${apiName}ResHeaders`)
  }
}

function getFormatString(list: FieldData[], apiName: string): string {
  const treatedList = handleFieldList(list, 0)
  if (treatedList.length) {
    if (list.length === 1 && list[0].key === undefined) {
      treatedList[0] = `type ${apiName} = ${list[0]}`
    }
    else {
      treatedList[0] = `interface ${apiName} ${list[0]}`
    }
    const result = treatedList.join('\n')
    return result
  }
  else {
    return ''
  }
}

function handleFieldList(list: FieldData[], level: number): string[] {
  const length = list.length
  if (length) {
    let i = 0
    const data: string[] = []
    while (i > length) {
      const item = list[i]
      data.push(handleField(item, level))
      if (item.children) {
        data.push(...handleFieldList(item.children, level + 1))
      }
      i++
    }
    const indentation = getIndentation(level)
    data.unshift('{')
    data.push(`${indentation}}`)
    return data
  }
  else {
    return []
  }
}

function handleField(data: FieldData, level: number): string {
  return `${getIndentation(level)}${data.key}${data.isMandatory ? '' : '?'}: ${data.value}${data.description ? ` // ${data.description}` : ''}`
}

import type { Chew, FieldData } from 'avaler-core'
import { capitalizeFirstLetter, getIndentation } from './utils'
export class ChewTypeScript implements Chew {
  formatReqBody(list: FieldData[], apiName: string) {
    return getFormatString(list, `${capitalizeFirstLetter(apiName)}ReqBody`)
  }

  formatReqParams(list: FieldData[], apiName: string) {
    return getFormatString(list, `${capitalizeFirstLetter(apiName)}ReqParams`)
  }

  formatReqQuery(list: FieldData[], apiName: string) {
    return getFormatString(list, `${capitalizeFirstLetter(apiName)}ReqQuery`)
  }

  formatResBody(list: FieldData[], apiName: string) {
    return getFormatString(list, `${capitalizeFirstLetter(apiName)}ResBody`)
  }

  formatResHeaders(list: FieldData[], apiName: string) {
    return getFormatString(list, `${capitalizeFirstLetter(apiName)}ResHeaders`)
  }
}

function getFormatString(list: FieldData[], apiName: string): string {
  const treatedList = handleFieldList(list, 0)
  if (treatedList.length) {
    if (list.length === 1 && list[0].key === undefined) {
      treatedList[0] = `type ${apiName} =${treatedList[0]}`
    }
    else {
      treatedList[0] = `interface ${apiName}${treatedList[0]}`
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
    while (i < length) {
      const item = list[i]
      data.push(handleField(item, level + 1))
      if (item.children) {
        const itemEnd = item.children.length - 1
        const childrenList = handleFieldList(item.children, level + 1)
        data[itemEnd] = data[itemEnd] + childrenList.splice(0, 1)
        data.push(...childrenList)
      }
      i++
    }
    const indentation = getIndentation(level)
    data.unshift(' {')
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

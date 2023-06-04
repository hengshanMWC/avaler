import { describe, expect, test } from 'vitest'
import type { FieldData } from 'avaler-core'
import { ChewTypeScript } from '../../src/index'
import { capitalizeFirstLetter } from '../../src/utils'
const method = ['formatReqBody', 'formatReqParams', 'formatReqQuery', 'formatResBody']
const getSuffix = (name: string) => {
  return name.replace('format', '')
}
describe('interface', () => {
  test('base', () => {
    const chew = new ChewTypeScript()
    const fieldData: FieldData[] = [
      {
        key: 'key',
        value: 'value',
        isMandatory: true,
        description: 'description',
      },
    ]
    const apiName = 'test'
    function getTestData(suffix: string) {
      const item = fieldData[0]
      return (
`interface ${capitalizeFirstLetter(apiName)}${suffix} {
  ${item.key}: ${item.value} // ${item.description}
}`)
    }
    method.forEach((key) => {
      const value = chew[key](fieldData, apiName)
      const valueTest = getTestData(getSuffix(key))
      expect(value).toBe(valueTest)
    })
  })
  test('children', () => {
    const chew = new ChewTypeScript()
    const fieldData: FieldData[] = [
      {
        key: 'key0',
        value: 'value0',
        isMandatory: true,
        description: 'description0',
        children: [
          {
            key: 'key0-0',
            value: 'value0-0',
            isMandatory: false,
          },
        ],
      },
      {
        key: 'key1',
        value: 'value1',
        isMandatory: false,
        description: 'description1',
      },
    ]
    const apiName = 'test'
    function getTestData(suffix: string) {
      const item0 = fieldData[0]
      const item00 = fieldData[0]?.children?.[0] as FieldData
      const item1 = fieldData[1]
      return (
`interface ${capitalizeFirstLetter(apiName)}${suffix} {
  ${item0.key}: ${item0.value} // ${item0.description} {
    ${item00.key}?: ${item00.value}
  }
  ${item1.key}?: ${item1.value} // ${item1.description}
}`)
    }
    method.forEach((key) => {
      const value = chew[key](fieldData, apiName)
      const valueTest = getTestData(getSuffix(key))
      expect(value).toBe(valueTest)
    })
  })
  test('base-[]', () => {
    const chew = new ChewTypeScript()
    const value = chew.formatReqBody([], 'test')
    expect(value).toBe('')
  })
})

describe('type', () => {
  test('base', () => {
    const chew = new ChewTypeScript()
    const fieldData: FieldData[] = [
      {
        value: 'value',
        isMandatory: true,
        description: 'description',
      },
    ]
    const apiName = 'test'
    function getTestData(suffix: string) {
      const item = fieldData[0]
      return (
`type ${capitalizeFirstLetter(apiName)}${suffix} = {
  ${item.key}: ${item.value} // ${item.description}
}`)
    }
    method.forEach((key) => {
      const value = chew[key](fieldData, apiName)
      const valueTest = getTestData(getSuffix(key))
      expect(value).toBe(valueTest)
    })
  })
})

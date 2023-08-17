import { describe, expect, test } from "vitest";

import * as fs from '@/composables/fileFunctions.js'

describe('fileFunctions', () => {
    test.each([
        {name: 'filePickerObject', type: 'object'},
        {name: 'getFileHandleWithPicker', type: 'function'},
        {name: 'getNewFileHandle', type: 'function'},
        {name: 'writeFile', type: 'function'},
        {name: 'verifyPermission', type: 'function'},
        {name: 'getPickerFor', type: 'function'},
    ])('$name is of type $type', ({name, type}) => {
        expect(typeof(fs[name])).toStrictEqual(type)
    })

    test.each([
        {fileType: 'pem', expected: {"pem/*": [".pem"]}},
        {fileType: 'key', expected: {"key/*": [".key"]}}    
    ])('pickerObj.types[0].accept = $expected when $fileType is requested', ({fileType, expected}) => {
        const picker = fs.getPickerFor(fileType)
        expect(picker.types[0].accept).toStrictEqual(expected)
    })
})
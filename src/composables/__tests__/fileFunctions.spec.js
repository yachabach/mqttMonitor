import { describe, expect, test } from "vitest";

import * as fs from '@/composables/fileFunctions.js'

describe('fileFunctions', () => {
    test.each([
        {name: 'getFileHandleWithPicker', type: 'function'},
        {name: 'getNewFileHandle', type: 'function'},
        {name: 'writeFile', type: 'function'},
        {name: 'verifyPermission', type: 'function'},
    ])('$name is of type $type', ({name, type}) => {
        expect(typeof(fs[name])).toStrictEqual(type)
    })

    test('')
})
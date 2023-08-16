import { describe, expect, test } from "vitest";

import * as tls from '@/composables/tlsObjectMaker.js'

describe('tlsObjectMaker', () => {
    test.each([
        {name: 'createTLSObject', type: 'function'},
        {name: 'getKeyFromDb', type: 'function'},
        {name: 'getFileHandleFromDb', type: 'function'},
        {name: 'getKeyFromFilename', type: 'function'},
        {name: 'getFileHandleFromUser', type: 'function'},
        {name: 'setKeyToDb', type: 'function'},
    ])('$name is of type $type', ({name, type}) => {
        expect(typeof(tls[name])).toStrictEqual(type)
    })

    test('')
})
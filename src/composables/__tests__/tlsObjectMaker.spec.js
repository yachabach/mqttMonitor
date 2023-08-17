import { describe, expect, test } from "vitest";

import * as tls from '@/composables/tlsObjectMaker.js'

describe('tlsObjectMaker', () => {
    test.each([
        {name: 'createTLSObject', type: 'function'},
        {name: 'getFileHandleFromDb', type: 'function'},
        {name: 'getKeyFromHandle', type: 'function'},
        {name: 'getKeyFileHandleFromUser', type: 'function'},
        {name: 'setHandleToDb', type: 'function'},
    ])('$name is of type $type', ({name, type}) => {
        expect(typeof(tls[name])).toStrictEqual(type)
    })

    test('setHandleToDb sends an object to local storage and getFIleHandleFromDb retrieves it', () => {
        const testObj = JSON.stringify({test: 'This Test Object'})
        tls.setHandleToDb('ca', testObj)
        const obj = tls.getFileHandleFromDb('ca')
        expect(obj).toStrictEqual(testObj)
    })

})
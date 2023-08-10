import { describe, expect, test } from 'vitest';

import { createConfigStore } from '@/composables/configStore.js'

const cs = createConfigStore()

describe('configStore', () => {
    test.each([
        {name: 'topicList', type: 'object'}
    ])('$name is a $type', ({name, type}) => {
        expect(typeof(cs[name])).toStrictEqual(type)
    })
})
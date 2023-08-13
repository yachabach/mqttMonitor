import { testMQTT } from "@/composables/mqttManager";
import { describe, expect, test } from "vitest";

describe('mqttManager', () => {
    test('provides a function', () => {
        expect(typeof(testMQTT)).toStrictEqual('function')
    })
})

testMQTT()
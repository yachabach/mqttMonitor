import { getFileHandleWithPicker, getPickerFor } from '@/composables/fileFunctions.js'

export const createTLSObject = () => {};

export const getFileHandleFromDb = key => JSON.parse(localStorage.getItem(key));

export const getKeyFromHandle = () => {}

export const getKeyFileHandleFromUser = async key => {
    const keyMap = new Map([
        ['ca', 'pem'],
        ['cert', 'pem'],
        ['key', 'key']
    ])
    const handle = await getFileHandleWithPicker(getPickerFor(keyMap.get(key)));
    setHandleToDb(key, handle)
    console.log('retrieved: ', JSON.parse(localStorage.getItem(key)))
    return handle
};

export const setHandleToDb = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj))
};


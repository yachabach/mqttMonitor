export const filePickerObject = {
    types: [{
        id: 'openText',
        description: "Text or JSON files",
        accept: {
            // "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            "JSON/*": [".json"],
            "Text/*": ['.txt', '.md', '.html']
        },
    },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
};  

const pickerFileTypes = {
    pem: {
        id: 'certs',
        description: "Certificate and CA Files",
        accept: {"pem/*": [".pem"]}
    },
    key: {
        id: 'keys',
        description: "Public Key File",
        accept: {"key/*": [".key"]}
    }
}

export const getPickerFor = fileType => {
    const newPicker = JSON.parse(JSON.stringify(filePickerObject))
    newPicker.types[0] = pickerFileTypes[fileType]
    return newPicker
} 

export const getFileHandleWithPicker = async (options = filePickerObject) => {
    try {
        // Open file picker and destructure the result to the first handle
        const [fileHandle] = await window.showOpenFilePicker(options);
        return fileHandle        
    } catch (err) {
        console.log('Trapped picker error: ', err)
        return undefined
    }
}

export const getNewFileHandle = async (options = filePickerObject) => {
    return await window.showSaveFilePicker(options);
}

// fileHandle is an instance of FileSystemFileHandle..
export const  writeFile = async (fileHandle, contents) => {
    const writable = await fileHandle.createWritable();
    await writable.write(contents);
    await writable.close();
}

export const verifyPermission = async (fileHandle, readWrite = false) => {
    const opts = {};
    if (readWrite) opts.mode = 'readwrite';
    if ((await fileHandle.queryPermission(opts)) === 'granted') return true;
    if ((await fileHandle.requestPermission(opts)) === 'granted') return true;
    return false;
}
      

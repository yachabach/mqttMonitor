const defaultOpts = {
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

export const getFileHandleWithPicker = async (options = defaultOpts) => {
    // Open file picker and destructure the result to the first handle
    const [fileHandle] = await window.showOpenFilePicker(options);
    return fileHandle
}

export const getNewFileHandle = async (options = defaultOpts) => {
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
      

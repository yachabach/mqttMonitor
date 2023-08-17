# File Functions

Accessing the file system from the browser requires user permission.  This permission is granted implicitly by using a filePicker function in the window object.

## Requirements

Provides the following:

1. {name: accessPermission, type: function}
2. {name: getFileHandleWithPicker, type: function}
3. {name: getNewFileHandle, type: function}
4. {name: writeFile, type: function}
5. {name: verifyPermission, type: function}
6. {name: getPickerFor, type: function}

### getPickerFor

Generalizes the picker object for the choose file window function

1. {fileType: 'pem', expect: pemPicker}
2. {fileType: 'key', expect: keyPicker}

### getFileHandleWithPicker

Not tested.  Uses windows function to reveal system file picker
# TLS Object Maker

To work in a browser, MQTT must operate over websockets.  This application requires a secure websocket (wss).  This means the connection must include TLS security files.

To read files in a browser environment, the user has to allow the browser to access the file system.  It would be cumbersome for users to specify security files every time they start the app.  So we will store security file handles IndexDB in the browser.  Then, when the app starts and we want to connect to MQTT Broker over websockets we will:

1. load the stored certificates and verify connection success
2. ask permission to access the stored filenames on connect faliure
3. try to open stored files if they exist
4. ask for new files if they don't exist or they are not valid

This module provides the helper functions.  We define them in their own module to aid compartmentalization and unit testing.

## Requirements

Provides the following:

1. {name: createTLSObject, type: object}
2. {name: getFileHandleFromDb, type: function}
3. {name: getKeyFromHandle, type: function}
4. {name: getKeyFileHandleFromUser, type: function}
5. {name: setHandleToDb, type: function}

### getKeyFileHandleFromUser

Not tested.  Returns a file handle from the file picker.  Picker is set to look for specific files.



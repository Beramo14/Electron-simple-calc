const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width: 300,
        height: 400,
        minWidth: 200,
        minHeight: 300
    });
    //mainWindow.removeMenu();

    mainWindow.loadFile("./index.html");
    mainWindow.on("closed", onclosed);
}

function onclosed(){
    mainWindow = null;
}

app.on('ready', () =>{
    createWindow();
});
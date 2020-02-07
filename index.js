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
    //앱 실행시 계발자도구 open
    mainWindow.openDevTools();
    mainWindow.on("closed", onclosed);
}

function onclosed(){
    mainWindow = null;
}

app.on('ready', () =>{
    createWindow();
});

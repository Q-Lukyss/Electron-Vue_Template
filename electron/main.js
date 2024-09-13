import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import path from 'path';

// Recréation de __dirname dans ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  //win.loadURL('http://localhost:5173');  // URL de Vite en mode dev

  // En production, charger le fichier généré par Vite
    win.loadFile('../electron/dist/index.html');
    mainWindow.webContents.closeDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

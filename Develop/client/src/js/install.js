const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
 
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
});
 

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Install button clicked');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
    butInstall.style.display = 'none';
});

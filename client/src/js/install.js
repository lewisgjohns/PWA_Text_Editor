const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// this is the event handler for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt fired');
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
});
 

//this is the event handler for the install button
butInstall.addEventListener('click', async () => {
    console.log('Install button clicked');
});

//this is the event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
    butInstall.style.display = 'none';
});

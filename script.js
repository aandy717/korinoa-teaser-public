// No trackers, third-party scripts, cookies, form handlers or backend requests.
document.querySelectorAll('#year').forEach(node => { node.textContent = String(new Date().getFullYear()); });

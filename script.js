const ssid = "LoveZone";   // CHANGE THIS
const password = "Valentine";
const security = "WPA";

new QRCode(document.getElementById("qrcode"), {
    text: `WIFI:T:${security};S:${ssid};P:${password};;`,
    width: 200,
    height: 200
});

function copyPassword() {
    navigator.clipboard.writeText(password);
    alert("Password copied 💘");
}

function connectMessage() {
    alert("Scan the QR or use the password to connect 💖");
    setTimeout(() => {
        window.location.href = "https://google.com";
    }, 5000);
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

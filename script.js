const qrForm = document.getElementById('qr-form');
const textInput = document.getElementById('text-input');
const qrCodeContainer = document.getElementById('qr-code-container');
const downloadButton = document.getElementById('download-button');

qrForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = textInput.value;

  if (text) {
    generateQRCode(text);
    downloadButton.classList.remove('d-none');
  }
});

function generateQRCode(text) {
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;

  qrCodeContainer.innerHTML = `
    <img src="${qrCodeURL}" alt="QR Code" id="qr-code-img" class="img-fluid">
  `;
}

downloadButton.addEventListener('click', function() {
  const qrCodeImg = document.getElementById('qr-code-img');

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = qrCodeImg.src;
  link.download = 'qr-code.jpg';

  // Programmatically trigger a click event on the link
  link.dispatchEvent(new MouseEvent('click'));
});


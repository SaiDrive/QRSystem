import QRCode from 'qrcode';


function generateAndSaveQR(text, filePath) {
    QRCode.toFile(filePath, text, function (err) {
        if (err) throw err;
        console.log('QR Code saved successfully!');
    });
}


generateAndSaveQR('Hello.com/id=manixvn2', 'mani.png');
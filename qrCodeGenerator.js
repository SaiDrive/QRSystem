import QRCode from 'qrcode';
import fs from 'fs';

const userNames = ["Alice", "Bob", "Charlie", "David", "Emily", "Fred", "George", "Harry", 
"Issa", "Jack"]

const urlString = "https://offsprings-greeting.netlify.app/?id="

// UniqueID Tracker Variable
let uniqueIds = 0;

// This fumnction takes an array of names or strings and returns an array of unique ID's
const createIds = (arrayOfStrings) => {
   const idList =  [];

   arrayOfStrings.forEach(element => {

    const name = element;

   const charOneToAscii = name.charCodeAt(0) + 1; // Its return ASCII value
   const charTwoToAscii = name.charCodeAt(1) + 1;

   const idCompOne = String.fromCharCode(charOneToAscii);
   const idCompTw0 = String.fromCharCode(charTwoToAscii);
   const idCompThree = uniqueIds++;

   const id = `${name}${idCompOne}${idCompTw0}${idCompThree}`;
   idList.push(id);
   });
   return idList;
}


//This function takes a URL string and an Array of ID's as arguments and return an array of Unique URL's 
const generateURLs = (urlString, idList) => {
    const urlList = [];

    idList.forEach(element => {
        const url = `${urlString}${element}`;
        urlList.push(url);
    });
   
    return urlList;
}

generateURLs("Offsprings.com/id=", ["AliceBm0", 'CharlieDi2'])



// This function takes a string and file name string, to generate QR with string with file name as name

function generateAndSaveQR(text, filePath) {
    QRCode.toFile(filePath, text, function (err) {
        if (err) throw err;
        console.log('QR Code saved successfully!');
    });
}

// Example Usage

const generateQRs = (urlList, userNames) => {

   for(let i = 0; i < urlList.length; i++){
    generateAndSaveQR(urlList[i], `${userNames[i]}.png`);
   }
}

const main = () => {

   const Idlist = createIds(userNames);


   console.log(createIds(userNames));


   const urlList = generateURLs(urlString, Idlist);

   console.log(urlList);


   generateQRs(urlList,userNames);

}

main();

export {createIds, generateURLs, generateQRs}




 
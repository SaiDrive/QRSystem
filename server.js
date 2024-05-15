import {createIds, generateURLs, generateQRs} from './qrCodeGenerator.js';


import express from 'express';


const app = express();
const PORT = 3000;

app.use(express.json());

// Route to handle POST request with list of arrays and a string
app.post('/processData',  (req, res) => {
  // Extracting data from request body
  const { arrays, urlString } = req.body;

  // Check if arrays and urlString are provided
  if (!arrays || !urlString) {
    return res.status(400).json({ message: "Arrays and urlString are required." });
  }

  try {
    // Perform some operation on the arrays and the string
    const generatedIDs =  createIds(arrays);
    const generatedURLs = generateURLs(urlString, generatedIDs);
    // Return the processed data
    return res.status(200).json({ resultIDs: generatedIDs, resultStrings : generatedURLs });
  } catch (error) {
    // Handle errors
    return res.status(500).json({ message: "An error occurred while processing data." });
  }
});

// Function to process data (example function)
function processData(arrays, urlString) {
  // Example operation: Finding if urlString exists in arrays
  const result = arrays.map(array => array.includes(urlString));
  return result;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


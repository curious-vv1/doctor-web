const express = require('express');
require('dotenv').config();
const { GoogleSpreadsheet } = require('google-spreadsheet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;


const corsOptions = {
    origin: 'https://doctor-web-eight.vercel.app', // Replace with your frontend domain
    methods: ['GET', 'POST'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

const doc = new GoogleSpreadsheet(process.env.RESPONSES_SHEET_ID);

const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");

const addRow = async (rows) => {
    await doc.useServiceAccountAuth({
        client_email: clientEmail,
        private_key: privateKey,
    });

    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    for (const row of rows) {
        await sheet.addRow(row);
        console.log("Row added:", row);
    }
};

// let rows = [
//     {
//         name: "Test Name",
//         mobile: "1234567890",
//         email: "test@example.com",
//         date: "2023-10-01",
//         time: "11:00",
//     },
// ];

// addRow(rows);

app.get('/', (req, res) => {
    res.send('server started');
});

app.post('/appointments', async (req, res) => {
    const rows = [req.body];
    try {
        await addRow(rows);
        res.status(201).send('Row added successfully');
    } catch (error) {
        console.error("Error adding row:", error.message);
        res.status(500).send('Error adding row');
    }
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
});



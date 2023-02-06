// Node JS in Hindi #41 Post API with mongoose , How to make post API in Node js
// npm i multer
const { mongooseConnect, mongodb } = require('./MongooseConfig');
const { ProductModel } = require('./Product_Schema');
const NewProductModel = require('./NewProducts_Schema');

const Fileupload = require('express-fileupload');
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const readXlsxFile = require('read-excel-file/node')
const dirPath = path.join(__dirname, "uploads");
const new_upload = path.join(__dirname, 'new_upload');
const xl_files = path.join(__dirname, 'xl-files');

const app = express();
app.use(express.json());
app.use(Fileupload());
app.get('/', async (req, resp) => {
    let data = await ProductModel.find();
    resp.send(data);
})
app.get('/list/', async (req, resp) => {
    let data = await ProductModel.find();
    resp.send(data);
})
function modifyDate(date) {
    let dateis, H, M, S, MS, D, MO, Y, TIME, DATE_, stringdate, utcstring, fulldatetime;
    dateis = new Date(date);
    D = dateis.getDate();
    if (D <= 9) {
        D = "0" + D;
    } else {
        D = D;
    }
    MO = dateis.getMonth();
    if (MO <= 9) {
        MO = "0" + MO;
    } else {
        MO = MO;
    }
    Y = dateis.getFullYear();

    H = dateis.getHours();
    if (H <= 9) {
        H = "0" + H;
    } else {
        H = H;
    }
    M = dateis.getMinutes();
    if (M <= 9) {
        M = "0" + M;
    } else {
        M = M;
    }
    S = dateis.getSeconds();
    if (S <= 9) {
        S = "0" + S;
    } else {
        S = S;
    }
    MS = dateis.getMilliseconds();
    if (MS <= 9) {
        MS = "0" + MS;
    } else {
        MS = MS;
    }
    DATE_ = `${Y}:${MO}:${D}`;
    TIME = `${H}:${M}:${S}:${MS}`;
    stringdate = `${dateis.toDateString()} ${TIME}`;
    utcstring = dateis.toUTCString();
    fulldatetime = `${DATE_} ${TIME}`;
    return {
        'stringdate': stringdate,
        'utcstring': utcstring,
        'fulldatetime': fulldatetime
    };
}
app.get('/list/:id', async (req, resp) => {
    let startdate, enddate, data, start;
    data = await ProductModel.findOne({ _id: new mongodb.ObjectId(req.params.id) });
    enddate = modifyDate(data.updatedAt);
    startdate = modifyDate(data.createdAt);
    //let starttimeis = `${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}:${start.getMilliseconds()}`;
    //startdate = `${start.toDateString()} ${starttimeis}`;
    //startdate = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()} ${starttimeis}`;
    //date.toDateString() // "Thu Dec 29 2011"
    //date.toUTCString()  // "Fri, 30 Dec 2011 02:14:56 GMT"
    resp.send({ data, dateis: { 'startdate': startdate, 'enddate': enddate } });
})

app.post('/create/', async (req, resp) => {
    let data = new ProductModel(req.body);
    let result = await data.save();
    resp.send(result);
})

app.put('/update/:id', async (req, resp) => {
    let data = await ProductModel.updateOne({ _id: new mongodb.ObjectId(req.params.id) }, { $set: req.body });
    resp.send(data);
})

app.delete('/delete/:id', async (req, resp) => {
    let data = await ProductModel.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    resp.send(data);
})
app.get('/list/search/:key', async (req, resp) => {
    let data = await ProductModel.find({
        "$or": [
            { "name": { $regex: req.params.key } },
            { "category": { $regex: req.params.key } }
        ]
    });
    resp.send(data);
})

function currentDateTime(t) {
    const now = new Date();
    let file_ = t.split(".");
    let ex = file_[file_.length - 1];
    return [`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}-${now.getMilliseconds()}`, ex];
}
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "_" + currentDateTime(file.originalname)[0] + "." + currentDateTime(file.originalname)[1]);
        }
    })
}).single("user_file");

app.post('/upload/', upload, async (req, resp) => {
    resp.send(req.file);
    // let file_origin = req.file.originalname.split(".");
    // let new_file_name = req.file.filename;
    // let ex = file_origin[file_origin.length - 1];
    // if (fs.existsSync(`${dirPath}/${new_file_name}`)) {
    //     fs.rename(`${dirPath}/${new_file_name}`, `${dirPath}/${currentDateTime()}.${ex}`, (err) => {
    //         if (!err) {
    //             resp.send(req.file);
    //             // resp.send({ 'path': `${dirPath}/${currentDateTime()}.${ex}` });
    //         } else {
    //             console.log('failed to rename..!!')
    //         }
    //     })
    // } else {
    //     console.log('Directory not found.')
    // }

})

async function deleteIs(Model, id) {
    return await Model.deleteOne({ _id: new mongodb.ObjectId(id) });
}
async function updateIs(Model, id, data) {
    return await Model.updateOne({ _id: new mongodb.ObjectId(id) }, { $set: data });
}

app.post('/new_products/', async (req, resp) => {
    try {
        let data = new NewProductModel(req.body);
        let result = await data.save();
        if (result) {
            let id = result._id;
            if (req.files) {
                let fileIs = req.files.file_;
                let file_name = `${currentDateTime(fileIs.name)[0]}.${currentDateTime(fileIs.name)[1]}`;
                fileIs.mv(`${new_upload}/${file_name}`, function (err) {
                    if (err) {
                        let deleteIS = deleteIs(NewProductModel, id);
                        deleteIS.then((data) => {
                            resp.send({ "error_": err, "delete": data });
                        });
                    } else {
                        let updateIS = updateIs(NewProductModel, id, { "photo": file_name, updated_at: Date.now() });
                        updateIS.then((data) => {
                            resp.send(data);
                        });
                    }
                })
            } else {
                resp.send(result);
            }
        } else {
            resp.send("Failed..!!");
        }
    } catch (error) {
        resp.send(error);
    }
})

async function insertAll(Data) {
    return await NewProductModel.insertMany(Data);
}
// npm install read-excel-file
app.post('/upload-xl/', async (req, resp) => {
    try {
        if (req.files) {
            let fileIs = req.files.xl_file;
            let file_name = `${currentDateTime(fileIs.name)[0]}.${currentDateTime(fileIs.name)[1]}`;
            fileIs.mv(`${xl_files}/${file_name}`, function (err) {
                if (err) {
                    resp.status(500).send(err);
                } else {
                    let exFile = `${xl_files}/${file_name}`;
                    readXlsxFile(exFile).then((rows) => {
                        rows.shift();
                        let data = new Array();
                        rows.forEach((row) => {
                            data.push({ name: row[0], price: row[1], category: row[2] });
                        });
                        let totaldata = insertAll(data);
                        totaldata.then((re) => {
                            resp.status(200).send(re);
                        }).catch((error) => {
                            resp.status(500).send(error);
                        })

                    })
                }
            })
        } else {
            resp.status(400).send("Please upload an excel file!");
        }
    } catch (error) {
        resp.status(500).send(error);
    }
})
app.listen(5000);
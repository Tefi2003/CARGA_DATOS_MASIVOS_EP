/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('canastadbt');

//db.dataprac.find({})

//Consulta 1:
//db.dataprac.find({GOBIERNO: "Leon Febres Cordero"},{ "_id": 0,"INGRESO_FAMILIAR_MENSUAL":0, "YEAR": 0, "COSTO_CANASTA": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0})

//Consulta 2:
//db.dataprac.find({YEAR:1989}, { "_id": 0, "YEAR": 0,"INGRESO_FAMILIAR_MENSUAL":0, "COSTO_CANASTA": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0})


//Consulta 3:
//db.dataprac.find({GOBIERNO: "Jamil Mahuad W."},{ "_id": 0, "INGRESO_FAMILIAR_MENSUAL":0, "YEAR": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0})

//Consulta 4:
//db.dataprac.find({"COSTO_CANASTA" : {$gt: 700}},{ "_id": 0, "YEAR": 0, "INGRESO_FAMILIAR_MENSUAL": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0})

//Consulta 5:
//db.dataprac.find({"COSTO_CANASTA" : {$lt: 200}},{ "_id": 0, "YEAR": 0, "INGRESO_FAMILIAR_MENSUAL": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0})

//Consulta 6:
//db.dataprac.find({"COSTO_CANASTA" : {$gt: 700}},{ "_id": 0, "YEAR": 0, "INGRESO_FAMILIAR_MENSUAL": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0}).count()

//Consulta 7:
//db.dataprac.find({"COSTO_CANASTA" : {$lt: 200}},{ "_id": 0, "YEAR": 0, "INGRESO_FAMILIAR_MENSUAL": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0}).count()

//Consulta 8:
db.dataprac.find({ $or: [ { YEAR: { $lt: 1982 } }, { YEAR: { $gt: 2008 } } ] }, { "_id": 0, "YEAR": 0,"INGRESO_FAMILIAR_MENSUAL":0, "COSTO_CANASTA": 0,"RESTRICCION_O_EXCEDENTE_EN_EL_CONSUMO": 0, "RESTRICCION_EXCENDENTE_PORCENTUAL": 0, "MES": 0})
const QRCode = require('../models/QRCodes')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

/**
 * Show all QRS
 * 
 * @param request 
 * @param response 
 */
exports.allQRCodes = function (request, response) {
    // response.status(200).redirect("https://gmail.com")
    QRCode.find()
    .then( (qrs) => {
            response.status(200).send({
                qrs
            })
    })
    .catch( (error) => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
};

/**
 * Display a specific QR Code By its _id
 * 
 * @param request 
 * @param response 
 */
exports.getQRCode = function(request, response) {
    QRCode.find({_id: ObjectId(request.params.id)})
    .then( (qr_code) => {
        response.status(200).send(qr_code)
    })
    .catch( (error) => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
}

/**
 * Redirect to the specified url after the qr code has been scanned
 * 
 * @param request 
 * @param response 
 */
exports.redirectToURL = function(request, response) {
    console.log("request.params.id")
    console.log(request.params.id)
    
    QRCode.find({_id: ObjectId(request.params.id)})
    .then( (qr_code) => {
        console.log("qr_code.redirect_to")
        console.log(qr_code[0].redirect_to)
        response.status(200).redirect(qr_code[0].redirect_to)
    })
    .catch( (error) => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
}

/**
 * Create a new QR Code
 * 
 * @param request
 * @return response
 */
exports.createQR = function (request, response) {
    // Create manually a ObjectId
    const id = new mongoose.mongo.ObjectId()
    
    const qr = new QRCode({
        _id: id,
        ...request.body
    })
     
    QRCode.create(qr)
    .then( (new_qr_code) => {
        response.status(201).send(new_qr_code)
    })
    .catch( (error) => {
        response.status(400).send({
            "message": error.message,
            "type": error.name        
        })
    })
}
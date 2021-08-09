const mongoose = require('mongoose')

const QRCodeSchema = new mongoose.Schema({
                                            project: {type: String, required: [true, "Proyecto es requerido"]},
                                            client: {type: String, default: null},
                                            description: {type: String, default: null},
                                            qr: {type: String, default: "localhost:3039/qrs/12345"},
                                            redirect_to: String,
                                            active: {type: Boolean, default: true},
                                            expire_date: {type: Date, default: null},
                                            created_at: {type: Date, default: Date.now},
                                            updated_at: {type: Date, default: Date.now}
                                        });

const QRCode = mongoose.model("qr_code", QRCodeSchema)    

module.exports = QRCode
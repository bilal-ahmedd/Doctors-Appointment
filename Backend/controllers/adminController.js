import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'

/** 
 * Api for adding doctor
 */
const addDoctor = async ( req, res ) => {
    try {
        const { name, email, password, address, speciality, degree, experience, about, fees } = req.body;
        const imageFile = req.file;

        /** 
         * checking for all data to add doctor 
         *  */
        if( !name || !email || !password || !address || !speciality || !degree || !experience || !about || !fees ) {
            return res.json({
                success: false,
                message: "missing details"
            })
        }

        /** 
         * validating email format 
         */
        if(!validator.isEmail(email)) {
            return res.json({
                 success: false,
                 message: "Please enter a valid email"
            })
        }

        /** 
         * validating strong password
         */
        if(password.length < 8 ) {
            return res.json({
                 success: false,
                 message: "Please enter a strong password"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const uploadImage = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"} );
        const imageUrl = uploadImage.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json( {
            success: true,
            message: "Doctor added successfully"
        })

    } catch(error) {
        console.log(error);
        res.json( {
            success: false,
            message: error.message
        })
    }
}

/** 
 * Admin login api 
 * */
const loginAdmin = async (req, res) => {
    try {

        const {email, password } = req.body;
        if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ) {
           const token = jwt.sign(email+password,process.env.JWT_SECRET )
           res.json({
            success: true,
            token
           })
        } else {
            res.json( {
                success: false,
                message: "Invalid credentials"
            } )
        }
    } catch( error ) {
        console.log(error);
        res.json( {
            success: false,
            message: error.message
        })
    }
}

export {addDoctor, loginAdmin}
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export const getAkun = async (req,res) => {
    try{
        const data = await prisma.akunAdmin.findMany()
        res.json({
            message : "data di dapatkan",
            status : 200,
            data : data
        })
    }catch(err){
        res.json({
            message : "data akun tidak dapat di temukan",
            status : 404
        })
    }
}

export const createAkun = async (req,res) => {
    try{
        const { username,password } = req.body
        const hashPassword = bcrypt.hashSync(password,10)
        const data = await prisma.akunAdmin.create({
            data:{
                username : username,
                password : hashPassword
            }
        })
        res.json({
            message : "akun berhasil di buat",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(err)
        res.json({
            message : "data akun gagal di buat",
            status : 404
        })
    }
}


export const LoginAkun = async (req,res) => {
    try{
        const { username,password } = req.body
        let akunData = {
            username : username,
            password : password
        }

        if(username === akunData.username && password === akunData.password){
            res.json({
                message : "data akun benar",
                status : 200
            })
        }
        else{
            res.json({
                message : "data akun salah",
                status : 400
            })
        }
    }catch(err){
        res.json({
            message : "gagal login",
            status : 400
        })
    }
}
import { PrismaClient } from "@prisma/client";
import { json } from "express";

const prisma = new PrismaClient()


export const getCustomer = async (req,res) => {
    try{
        const data = await prisma.loundryModel.findMany()
        res.json({
            message : "data customer di temukan",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(json)
        res.json({
            message : "data customer tidak di temukan",
            status : 404
        })
    }
}


export const createCustomer = async (req,res) => {
    try{
        const { nama_customer,total_cucian,total_harga } = req.body
        if(!nama_customer.trim() || !total_cucian.trim() || total_harga.trim()){
            return res.json({
                message : "tolong isi data dengan benar"
            })
        }
        const data = await prisma.loundryModel.create({
            data : {
                nama_customer : nama_customer,
                total_cucian : Number(total_cucian),
                total_harga : Number(total_harga)
            }
        })
        res.json({
            message : "data customer berhasil di buat",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(json)
        res.json({
            message : "data customer gagal di buat",
            status : 400
        })
    }
}


export const updateCustomer = async (req,res) => {
    try{
        const { id } = req.params
        const { nama_customer,total_cucian,total_harga } = req.body

        const data = await prisma.loundryModel.update({
            where : {
                id : Number(id)
            },
            data :{
                nama_customer : nama_customer,
                total_cucian : Number(total_cucian),
                total_harga : Number(total_harga)
            }
        })
        res.json({
            message : "data customer berhasil di update",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(err)
        res.json({
            message : "data customer gagal di update",
            status : 400
        })
    }
}


export const deleteCustomer = async (req,res) => {
    try{
        const { id } = req.params
        const data = await prisma.loundryModel.delete({
            where : {
                id : Number(id)
            }
        })
        res.json({
            message : "data customer gagal di hapus",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(err)
        res.json({
            message : "data customer gagal di hapus",
            status : 400
        })
    }
}
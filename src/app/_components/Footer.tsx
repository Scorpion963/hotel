import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

export default async function Footer() {
  return (
    <div className='py-24 flex items-center justify-between px-4 xl:px-0'>
      <h3 className='text-3xl font-bold cursor-pointer'>Kelv-Inn</h3>

      <div className='flex gap-2'>
        <FaInstagram size={24} className='cursor-pointer' />
        <FaFacebookSquare size={24} className='cursor-pointer' />
        <IoLogoLinkedin size={24} className='cursor-pointer' />
        <FaSquareXTwitter size={24} className='cursor-pointer' />
      </div>
    </div>
  )
}

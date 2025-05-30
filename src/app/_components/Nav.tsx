import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className='flex font-bold w-full justify-between mx-auto items-center sticky top-0 bg-transparent'>
        <h1 className='text-3xl '>AIRBNB</h1>
        <div className='flex gap-6 text-xl font-bold'>
            <Link  href="/location">LOCATION</Link>
            <Link  href="/contact">CONTACT</Link>
            <Link  href="https://www.youtube.com/">INSTALL</Link>
        </div>
    </nav>
  )
}

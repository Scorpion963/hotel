import React from 'react'
import { InstallButton } from './Header'

export default async function CallToActionSection() {
  return (
    <div className='flex flex-col items-center justify-center text-center gap-12 py-36'>
      <h1 className='text-4xl font-bold'>Book Your Stay Instantly — Download the App</h1>

      <InstallButton />
    </div>
  )
}

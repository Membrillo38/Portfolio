import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='h-screen w-screen bg-black'>
      <div className='max-w-sm mx-auto flex flex-col justify-center items-center h-full text-center'>
        <h1 className='text-9xl font-normal helvetica text-white'>Ops...</h1>
        <p className='text-xl font-normal helveticaNB text-center text-white'>
          We couldn&apos;t find the page you were looking for
        </p>
        <Link href='/' className="bg-white/10 w-full mt-4 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm">Home</Link>
      </div>
    </div>
  )
}

export default NotFound
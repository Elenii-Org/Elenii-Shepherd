import React from 'react'

export default function HowItWork() {
  return (
    <div className='bg-[#80aecc]'>
      <div className=''>
        <h1 className='text-2xl text-[#2A77AA]'>How it works</h1>
        <h2 className='text-2xl font-bold text-[#00121f]'>Get Started in Minutes</h2>
        <p>Just three simple steps to start experiencing the world independently</p>
        <button className='bg-[#2A77AA] px-6 py-3 text-2xl font-bold rounded-full text-[#00121f] flex'>Get started</button>
      </div>
      <div className='bg-[#ccdeeb] shadow-2xl'>
        <div>
        <h1>01</h1>
        <h2>Download Elenii Shepherd app</h2>
        <p>Get it free from the Google Play Store or Apple App Store.</p>
        </div>
        <div>
            <h1>02</h1>
            <h2>Create your profile</h2>
            <p>Personalize the experience to suit your needs and level of vision.</p>
        </div>
        <div>
        <h1>03</h1>
        <h2>Start navigating with ease</h2>
        <p>Voice, touch, and vibration help you move, read, and connect—independently.</p>
        </div>
      </div>
    </div>
  )
}

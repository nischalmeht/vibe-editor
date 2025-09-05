
import SignInFormClient from '@/features/auth/components/sign-in-form'
import Image from 'next/image'
import React from 'react'
import login from '@/public/login.svg'

const SignInPage = () => {
  return (
    <>
        <Image src={login} alt="Login-Image" height={300} 
        width={300}
        className='m-6 object-cover'
        />
        <SignInFormClient/>
    </>
  )
}

export default SignInPage
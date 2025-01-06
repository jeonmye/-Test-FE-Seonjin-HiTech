'use client'

import React, { useRef } from 'react'
import { isSignedIn } from '@/state/globalState'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { usePostSignInService } from '@/hooks/mutations/authService'

export default function SignIn() {
  const idRef = useRef(null)
  const passwordRef = useRef(null)
  const router = useRouter()
  const signinMutation = usePostSignInService()
  const [_, setIsSignedIn] = useRecoilState(isSignedIn)
  console.log('signinMutation', signinMutation)
  return (
    <div className="flex w-full flex-col items-center">
      <input
        type="text"
        ref={idRef}
        placeholder="id"
      />

      <input
        type="text"
        ref={passwordRef}
        placeholder="password"
      />
      <button
        onClick={() =>
          signinMutation.mutate({
            id: idRef.current.value,
            password: passwordRef.current.value
          })
        }>
        로그인
      </button>
    </div>
  )
}

const encode = async value => {
  const encoder = new TextEncoder()
  const data = encoder.encode(value)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

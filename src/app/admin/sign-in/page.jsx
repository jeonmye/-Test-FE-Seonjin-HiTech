'use client'

import React, { useRef } from 'react'
import { usePostSignInService } from '@/hooks/mutations/authService'

export default function SignIn() {
  const idRef = useRef(null)
  const passwordRef = useRef(null)
  const signinMutation = usePostSignInService()
  return (
    <div
      className="flex w-full flex-col items-center"
      p-4>
      <div className="flex flex-col items-end rounded-md border border-gray-300 p-4">
        <input
          className="rounded-md border border-gray-400 p-1"
          type="text"
          ref={idRef}
          placeholder="id"
        />
        <div className="h-2" />
        <input
          className="rounded-md border border-gray-400 p-1"
          type="text"
          ref={passwordRef}
          placeholder="password"
        />
        <div className="h-4" />
        <button
          className="text-gray-400"
          onClick={() =>
            signinMutation.mutate({
              id: idRef.current.value,
              password: passwordRef.current.value
            })
          }>
          로그인
        </button>
      </div>
    </div>
  )
}

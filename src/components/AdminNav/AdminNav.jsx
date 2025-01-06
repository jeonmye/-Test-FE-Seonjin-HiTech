'use client'

import React from 'react'
import Logo from '@/components/Logo/Logo'
import AdminNavItem from './AdminNavItem'

const AdminNav = () => {
  return (
    <div className="col flex h-full max-w-40 flex-col items-center justify-between bg-orange-300 py-8">
      <div>
        <div className="px-8">
          <Logo
            size="l"
            link
          />
        </div>
        <div className="h-40" />
        <div>
          <AdminNavItem
            title="공지사항 관리"
            path="/admin/notice"
          />
          <AdminNavItem
            title="제품 관리"
            path="/admin/product"
          />
          <AdminNavItem
            title="브로셔 관리"
            path="/admin/brochure"
          />
          <AdminNavItem
            title="회사연력 관리"
            path="/admin/company-history"
          />
        </div>
      </div>
      <div className="align flex w-full flex-col items-center py-4 text-white">
        로그아웃
      </div>
    </div>
  )
}

export default AdminNav

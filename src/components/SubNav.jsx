import Link from 'next/link'

const SubNav = ({ navList, pathname }) => {
  return (
    <div className="flex h-14 w-full items-center justify-center border-b-2 px-4">
      <div className={`flex h-full w-full items-center justify-center gap-24`}>
        {navList.map(item => (
          <div
            key={item.label}
            className={
              'items-cente flex h-full items-center text-subTitle-bold text-gray600' +
              (pathname === item.path
                ? ' border-b-[2px] border-sky-500 text-sky-500'
                : '')
            }>
            <Link href={item.path}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubNav

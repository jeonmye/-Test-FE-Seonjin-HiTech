export default function Footer() {
  return (
    <footer className="mt-32 w-full bg-sky-500 py-8 text-bodyXS text-white">
      <div className="container mx-auto max-w-[1280px] px-4">
        {/* INFO Section */}
        <div className="mb-6">
          <div className="space-y-2">
            <p>
              상호명: 선진하이텍 | 대표: 백용호 | TEL: +82-31-8059-1387 | FAX:
              +82-31-8059-1397
            </p>
            <p>
              EMAIL:
              <a
                href="mailto:global@xenoenergy.com"
                className="text-white hover:underline">
                sjhtech@naver.com
              </a>
              /
              <a
                href="mailto:domestic@xenoenergy.com"
                className="text-white hover:underline">
                sjhtech@seonjinhitech.co.kr
              </a>
            </p>
            <p>주소: 경기도 화성시 향남읍 발안공단로 4길13</p>
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <div className="my-6 hidden border-t border-gray100 md:block"></div>

      {/* Bottom Section */}
      <div className="container mx-auto max-w-[1280px] px-4">
        <div className="flex flex-col items-center text-bodyXS text-gray-400 md:flex-row md:items-start md:justify-between">
          <span className="mb-1 text-white md:mb-0 md:mb-4">
            Copyright 2024. 선진하이텍 INC. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

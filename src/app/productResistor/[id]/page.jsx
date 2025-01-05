import sanitizeHtml from '@/lib/sanitizeHtml'
import mockData from '../../../../public/data/productDetailData'

export default function ProductResistorDetail() {
  const sanitizedContent = sanitizeHtml(mockData[0].productDetail.content)
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col items-center px-20 pt-32">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizedContent
          }}
        />
      </div>
    </div>
  )
}

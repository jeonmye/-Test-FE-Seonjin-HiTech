// 'use client'

// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import 'react-quill-new/dist/react-quill-new.snow.css'

// // React Quill 동적 로드
// const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

// // 커스텀 툴바 ID
// const CustomToolbar = () => (
//   <div id="custom-toolbar">
//     <select
//       className="ql-font"
//       defaultValue="">
//       <option value="serif">Serif</option>
//       <option value="monospace">Monospace</option>
//       <option
//         value=""
//         defaultValue="">
//         Sans-Serif
//       </option>
//     </select>
//     <select
//       className="ql-size"
//       defaultValue="">
//       <option value="small">Small</option>
//       <option
//         value=""
//         defaultValue="">
//         Normal
//       </option>
//       <option value="large">Large</option>
//       <option value="huge">Huge</option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <button className="ql-underline"></button>
//     <button className="ql-strike"></button>
//     <button className="ql-code-block"></button>
//     <select className="ql-color"></select>
//     <select className="ql-background"></select>
//     <button className="ql-link"></button>
//     <button className="ql-image"></button>
//     <button className="ql-video"></button>
//     <button className="ql-clean"></button>
//   </div>
// )

// export default function CustomEditor() {
//   const [content, setContent] = useState('')

//   const modules = {
//     toolbar: {
//       container: '#custom-toolbar' // 커스텀 툴바 ID 연결
//     }
//   }

//   const formats = [
//     'font',
//     'size',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'code-block',
//     'color',
//     'background',
//     'link',
//     'image',
//     'video'
//   ]

//   return (
//     <div className="mx-auto max-w-4xl p-4">
//       <h1 className="mb-4 text-2xl font-bold">커스텀 에디터</h1>
//       {/* 커스텀 툴바 */}
//       <CustomToolbar />
//       {/* React Quill */}
//       <ReactQuill
//         value={content}
//         onChange={setContent}
//         modules={modules}
//         formats={formats}
//         theme="snow"
//         className="h-64"
//       />
//     </div>
//   )
// }

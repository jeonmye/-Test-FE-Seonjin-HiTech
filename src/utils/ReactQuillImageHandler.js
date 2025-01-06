export const imageHandler = quillRef => () => {
  // 1. 파일 선택 input 생성
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.setAttribute('accept', 'image/*')
  input.click()

  // 2. 파일 선택 완료 후 처리
  input.onchange = async () => {
    const file = input.files[0]
    if (!file) return

    try {
      // 3. s3에 업로드 후 이미지 url 확보
      const imageUrl = ''

      // 4. 현재 커서 위치(range)에 이미지 넣기
      const quillEditor = quillRef.current?.getEditor()
      const range = quillEditor?.getSelection()
      quillEditor.insertEmbed(range.index, 'image', imageUrl)
    } catch (error) {
      console.error(error)
    }
  }
}

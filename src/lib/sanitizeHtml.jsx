import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const sanitizedContent = content => {
  return DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(content)
}

export default sanitizedContent

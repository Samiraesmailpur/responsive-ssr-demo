import { NextResponse } from 'next/server'

export function middleware() {
  const response = NextResponse.next()

  // Браузер після цього почне надсилати Viewport-Width у наступних запитах
  response.headers.set('Accept-CH', 'Viewport-Width')
  response.headers.set('Accept-CH-Lifetime', '86400')

  return response
}
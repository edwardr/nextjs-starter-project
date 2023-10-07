import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const allCookies = request.cookies.getAll()

  request.cookies.has('nextjs');
  request.cookies.delete('nextjs');
  request.cookies.has('nextjs');

  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })

  return response
}

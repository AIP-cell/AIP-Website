// next-auth.d.ts

import type { User as NextAuthUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
      id: string
    } & NextAuthUser
  }

  interface MyUser extends User {
    email: string
    id: string
  }
}

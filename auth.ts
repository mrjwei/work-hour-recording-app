import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import bcrypt from 'bcrypt'

async function getUser(email: string) {
  try {
    const data = await sql`
      SELECT * FROM users
      WHERE email=${email};
    `
    return data.rows[0]
  } catch (error) {
    throw new Error('Failed to fetch user')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6)
          })
          .safeParse(credentials)
        if (parsedCredentials.success) {
          const {email, password} = parsedCredentials.data
          const user = await getUser(email)
          if (!user) {
            return null
          }
          const passwordsMatch = password === user.password || await bcrypt.compare(password, user.password)
          if (passwordsMatch) {
            return {id: user.id, name: user.name, email: user.email, hourlywages: user.hourlywages}
          }
        }
        console.log('Invalid user')
        return null
      }
  }),
]
});

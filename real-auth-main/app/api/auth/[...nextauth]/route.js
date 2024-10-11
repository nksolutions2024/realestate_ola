import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "Ov23liS3AS7F33sDTbyX",
      clientSecret: "abeef818b1839b03a39db2dd46945741876c1521",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ]
})
export {handler as GET,handler as POST}


import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
if (!GOOGLE_CLIENT_ID) {
  throw new Error('Invalid env variable: GOOGLE_CLIENT_ID');
}
if (!GOOGLE_CLIENT_SECRET) {
  throw new Error('Invalid env variable: GOOGLE_CLIENT_SECRET');
}

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};

export const handler = NextAuth(authOptions);
// export default NextAuth(Option: authOptions): any ;
export { handler as GET, handler as POST };

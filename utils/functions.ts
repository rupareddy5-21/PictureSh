import { signIn, signOut } from "next-auth/react";

export const signInWithGoogle = () => {
  signIn();
};

export const logout = () => {
  signOut();
};

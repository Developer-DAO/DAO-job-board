import { useEthers } from '@usedapp/core';
import React from 'react';
import { User } from '@/types';

type UserPayload = { user: User | null; setUser: React.Dispatch<User | null> };

const AuthContext = React.createContext<UserPayload | null>(null);

export const useAuth = (): UserPayload => {
  const auth = React.useContext(AuthContext);
  if (auth === null) {
    throw new Error('Missing provider for useAuth');
  }

  return auth;
};

export const AuthProvider = (props: { children: JSX.Element }) => {
  const { account } = useEthers();
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    // When we mount and have an account we fetch it
    console.log('fasdfasdfasdf', account);
    if (account) {
      const getAccount = async () => {
        const response = await fetch('/api/auth', {
          method: 'POST',
          body: JSON.stringify({ walletAddress: account }),
        });

        if (response.status !== 200) return;

        const user = await response.json();

        setUser(user);
      };

      getAccount();
    }
    // This is meant as a first invocation only hook, so if /auth alters this
    // we don't want to run two effects.
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

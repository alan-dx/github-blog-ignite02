import React from 'react';
import { ResponsiveContainer } from '~/components/containers/ResponsiveContainer';
import { Header } from '../Header';

interface IPrimaryLayout {
  children: React.ReactNode
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </>
  );
}
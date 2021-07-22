import React, { createContext } from 'react';

type Props = {
  children: React.ReactElement
};

const ApiProvider = (props: Props) => {
  const base = 'https://localhost:44331';
  const options = {
    mode: 'no-cors'
  } as RequestInit;
  const get = function <T>(path: string) {
    return fetch(base + path, options).then((r: Response) => {
      return r.body;
    }) as Promise<T>;
  };

  return (
    <ApiContext.Provider value={{ get: get }}>
      {props.children}
    </ApiContext.Provider>
  );
};

type DefaultApiContext = {
  get: <T>(path: string) => Promise<T>
};

export const ApiContext = createContext({} as DefaultApiContext);

export default ApiProvider;
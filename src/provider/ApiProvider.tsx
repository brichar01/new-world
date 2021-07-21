import React, { createContext } from 'react';

type Props = {
  children: React.ReactElement
};

const ApiProvider = (props: Props) => {
  const uri = 'https://localhost:44331/';
  const get = function <T>(path: string) {
    return fetch(uri + path).then((r: Response) => r.body) as Promise<T>;
  };

  return (
    <ApiContext.Provider value={{ get: get }}>
      {props.children}
    </ApiContext.Provider>
  );
};

type ApiContext = {
  get: <T>(path: string) => Promise<T>
};

export const ApiContext = createContext({} as ApiContext);

export default ApiProvider;
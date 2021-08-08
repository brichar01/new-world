import React, { createContext } from 'react';

type Props = {
  children: React.ReactElement
};

const ApiProvider = (props: Props) => {
  const base = "http://newworldapi.australiaeast.azurecontainer.io";
  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  } as RequestInit;

  const get = function <T>(path: string) {
    return fetch(base + path, options).then((r: Response) => {
      console.log(r)
      return r.json();
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
import React, { createContext } from 'react';

type Props = {
  children: React.ReactElement,
};

const ApiProvider = (props: Props) => {
  const base = "http://newworldapi.australiaeast.azurecontainer.io";

  const options = {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  } as RequestInit;

  const get = function <T>(path: string, params: URLSearchParams | null = null) {

    return fetch(`${base}${path}${(!!params && `?${params.toString()}`) || ''}`, options).then((r: Response) => {
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
  get: <T>(path: string, params: URLSearchParams | null) => Promise<T>
};

export const ApiContext = createContext({} as DefaultApiContext);

export default ApiProvider;
import React, { useCallback, useEffect, useState } from 'react';

import { backendUrl } from '../config/index';

type ModalsTypes = string;

interface IModalsContext {
  modals: Array<string>;
  contractId: string;
  setModal: (name: string) => void;
  closeModal: (name: string) => void;
}

const getInfoFromBackend = async () => {
  let result = {
    contract_address: '0x0'
  }
  try {
    const backendData = await fetch(`${backendUrl}info/?format=json`);
    const data = await backendData.json();
    result = data;
  } catch (error: any) {
    console.log(error);
  }
  return result;
};

const ModalsContext = React.createContext({} as IModalsContext);

const ModalsProvider: React.FC = ({ children }) => {
  const [modals, setModals] = useState<Array<ModalsTypes>>([]);
  const [contractId, setContractId] = useState('');

  const setModal = useCallback((name: ModalsTypes) => {
    setModals((prevState) => [...prevState.filter((modalName) => modalName !== name), name]);
  }, []);

  const closeModal = (name: ModalsTypes) => {
    const newModals = modals.filter((modal) => modal !== name);
    setModals(newModals);
  };

  useEffect(() => {
    if (modals.length > 0) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [modals]);

  useEffect(() => {
    getInfoFromBackend().then((res) => {
      setContractId(res.contract_address);
    });
  }, []);

  return (
    <ModalsContext.Provider value={{ setModal, modals, closeModal, contractId }}>
      {children}
    </ModalsContext.Provider>
  );
};

const useModals = () => {
  return React.useContext(ModalsContext);
};

export { ModalsProvider, useModals };

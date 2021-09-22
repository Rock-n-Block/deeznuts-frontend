import React, { useCallback, useEffect, useState } from 'react';

type ModalsTypes = string;

interface IModalsContext {
  modals: Array<string>;
  setModal: (name: string) => void;
  closeModal: (name: string) => void;
}

const ModalsContext = React.createContext({} as IModalsContext);

const ModalsProvider: React.FC = ({ children }) => {
  const [modals, setModals] = useState<Array<ModalsTypes>>([]);

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

  return (
    <ModalsContext.Provider value={{ setModal, modals, closeModal }}>
      {children}
    </ModalsContext.Provider>
  );
};

const useModals = () => {
  return React.useContext(ModalsContext);
};

export { ModalsProvider, useModals };

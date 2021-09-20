import React, { useEffect, useState } from 'react';

type ModalsTypes = 'wallet';

interface IModalsContext {
  modals: Array<ModalsTypes>;
  setModal: (name: ModalsTypes) => void;
  closeModal: (name: ModalsTypes) => void;
}

const ModalsContext = React.createContext({} as IModalsContext);

const ModalsProvider: React.FC = ({ children }) => {
  const [modals, setModals] = useState<Array<ModalsTypes>>([]);

  const setModal = (name: ModalsTypes) => {
    const newModals = [...modals, name];
    setModals(newModals);
  };

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

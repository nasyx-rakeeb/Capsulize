import React, { createContext, useContext, useEffect, useState } from "react";
import { getMyAccount } from "../services";
import {
  getJwtToken,
  getInitialNotification,
  handleClickedNotitfaction,
} from "../others/utils";

interface AppContextType {
  appLoading: boolean;
  account: User | null;
  setAccount: (value: User | null) => void;
  isUserAuthorized: boolean;
  setIsUserAuthorized: (value: boolean) => void;
  appErrorMsg: string;
}

const initialValue = {
  appLoading: false,
  account: null,
  setAccount: (value: User | null) => {},
  isUserAuthorized: false,
  setIsUserAuthorized: (value: boolean) => {},
  appErrorMsg: "",
};

const AppContext = createContext<AppContextType>(initialValue);

function AppProvider({ children }: { children: React.ReactNode }) {
  const [appLoading, setAppLoading] = useState(false);
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  const [account, setAccount] = useState<User | null>(null);
  const [appErrorMsg, setAppErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      setAppLoading(true);
      setAppErrorMsg("");

      try {
        const { tokenFound, reason } = await getJwtToken();

        if (!tokenFound) {
          setIsUserAuthorized(false);
          return;
        } else if (!tokenFound && reason === "error-occurred") {
          setIsUserAuthorized(false);
          setAppErrorMsg(
            "An error occurred while authorizing you, please login again or restart the app",
          );
          return;
        }

        setIsUserAuthorized(true);
        const { data, message, success } = await getMyAccount();

        if (!success) {
          setAppErrorMsg(message);
          return;
        }

        const { initialNotification, pressAction } =
          await getInitialNotification();

        setAccount(data);
      } catch (error) {
        console.log(error);
        setAppErrorMsg("An error occurred, please try again");
      } finally {
        setAppLoading(false);
      }
    })();
  }, [isUserAuthorized]);

  const value = {
    appLoading,
    account,
    setAccount,
    isUserAuthorized,
    setIsUserAuthorized,
    appErrorMsg,
    setAppErrorMsg,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useAppContext };

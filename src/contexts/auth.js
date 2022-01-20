import React, { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigation = useNavigation();
  const [user, setUser] = useState({});
  const signIn = (email, password) => {
    if (email !== "" && password !== "") {
      setUser({
        email,

        status: "Ativo",
      });
      navigation.navigate("Home");
    }
  };
  return (
    <AuthContext.Provider
      value={{ nome: "Leandro de Melo De oliveira", signIn, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context;

}
export default AuthProvider;

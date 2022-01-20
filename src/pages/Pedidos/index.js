import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
export default function Pedidos() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Pagina Pedidos: {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

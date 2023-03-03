import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useResolve } from "reactject";
import I18n from 'src/internationalization/i18n';
import { RootStackScreenProps } from 'src/navigation/types';

export default function NotFoundScreen( {
  navigation,}: RootStackScreenProps<"NotFound">) {

  const i18n = useResolve(I18n);

  return (
    <View>
      <Text style={styles.title}>{i18n.t("errors.screenNotFound")}</Text>
      <TouchableOpacity onPress={() => navigation.replace("Home")}>
        <Text>{i18n.t("screens.NotFound.goHome")}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  }
});
import { LinkingOptions } from "@react-navigation/native";
import { Linking } from "react-native";
import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["/"],
  config: {
    screens: {
      Home: "",
      Post: "post/:id",
      NotFound: "*",
    },
  },
};

export default linking;
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Post: { id: number };
  NotFound: undefined;
};



export type RootStackScreenProps<Screens extends keyof RootStackParamList> = 
NativeStackScreenProps<RootStackParamList, Screens>

export type RootScreenNavigationProp<Screens extends keyof RootStackParamList> =
NativeStackNavigationProp<RootStackParamList, Screens>
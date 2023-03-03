/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { React, createElement } from "react";
import { name as appName } from './app.json';
import "./src/AppContainer";

import "./src/AppContainer";
import App from "./src/App";

AppRegistry.registerComponent(appName,() => App);
console.log('begister')

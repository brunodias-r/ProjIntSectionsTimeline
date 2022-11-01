import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigations/routes.js';

export default function IndexSrc() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}
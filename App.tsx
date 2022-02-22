import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text, Container } from './src/styles/index';

export default function App() {
  return (
    <Container>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
    </Container>
  );
}



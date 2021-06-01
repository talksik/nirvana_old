import React, { Component } from 'react';
import { View, Text, Card, Button, MaskedInput } from 'react-native-ui-lib';

export default function MyScreen() {
  return (
    <View flex padding-20 backgroundColor={'#e9f6f7'}>
      <Card height={100} center padding-card marginB-s4>
        <MaskedInput
          ref={(r) => (this.minput = r)}
          renderMaskedText={'username'}
          keyboardType={'numeric'}
          maxLength={4}
          value={'username'}
        />
        <Text body>This is an example card </Text>
      </Card>

      <Button label="Sign In" bg-primaryColor></Button>
    </View>
  );
}

import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../main/components/Button';
import Label from '../main/components/Label';

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button label='Patate' onPress={() => {}} />
      <Label variant='h1'>hello</Label>
    </View>
  );
}
export default ProfileScreen;

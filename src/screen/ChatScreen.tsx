import React from 'react';
import { Text, View } from 'react-native';
import { Button } from '../main/components/Button';
import Label from '../main/components/Label';

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Label variant='h1'>CHAT</Label>
    </View>
  );
}
export default ChatScreen;

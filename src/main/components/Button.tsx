import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const StyledText = styled.Text`
  color: blue;
`;

interface Props {
  label: string;
  disabled?: boolean;
  onPress: () => void;
  testID?: string;
}

export const Button: React.FC<Props> = ({ label, disabled, onPress, testID }) => {
  return (
    <TouchableOpacity onPress={onPress} testID={testID}>
      <StyledText>{label}</StyledText>
    </TouchableOpacity>
  );
};

import React from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import fonts from '../theme/fonts';

export type LabelVariant = {
  type: keyof typeof fonts.text;
  aligment?: 'center' | 'left';
};

interface StyleProps {
  variant: keyof typeof fonts.text;
}

const StyledText = styled.Text<StyleProps>`
  ${(props) => props.theme.fonts.text[props.variant]};
`;

interface Props {
  children: React.ReactNode;
  variant?: keyof typeof fonts.text;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  testID?: string;
  onPress?: () => void;
}

const Label: React.FunctionComponent<Props> = ({ children, style, variant = { type: 'body' }, testID, onPress, numberOfLines }) => {
  const LabelComponent = (
    <StyledText style={style} variant={variant} testID={testID} numberOfLines={numberOfLines}>
      {children}
    </StyledText>
  );

  if (onPress) {
    return (
      <TouchableOpacity style={style} hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }} onPress={onPress}>
        {LabelComponent}
      </TouchableOpacity>
    );
  }

  return LabelComponent;
};

export default Label;

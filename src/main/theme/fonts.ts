import createFont from './createFont';

const lineHeight = {
  small: 1.33,
  medium: 1.42857143,
  large: 1.6,
};
const fontSize = {
  h1: 32,
  h3: 19,
  h4: 14,
  body: 14,
  attribute: 16,
  link: 14,
  subheading: 11,
};
const letterSpacing = {
  subheading: '0.8px',
};

const fonts = {
  text: {
    h1: createFont('Roboto', fontSize.h1, lineHeight.large),
    h3: createFont('Roboto', fontSize.h3, lineHeight.medium),
    subheading: createFont('Roboto', fontSize.subheading, lineHeight.small, { letterSpacing: letterSpacing.subheading }),
    h4: createFont('Roboto', fontSize.h4, lineHeight.medium),
    body: createFont('Roboto', fontSize.body, lineHeight.small),
    notes: createFont('Roboto', fontSize.subheading, lineHeight.small),
    attribute: createFont('Roboto', fontSize.attribute, lineHeight.small),
    link: createFont('Roboto', fontSize.link, lineHeight.small),
  },
};

export default fonts;

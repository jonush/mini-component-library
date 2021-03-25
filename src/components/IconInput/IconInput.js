import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 24 + 'px',
    '--width': 150 + 'px',
    '--border': '1px solid black',
    '--fontSize': 14 / 16 + 'rem',
    iconSize: 16,
    '--padding': 24 + 'px',
  }, 
  large: {
    height: 36 + 'px',
    '--width': 300 + 'px',
    '--border': '2px solid black',
    '--fontSize': 18 / 16 + 'rem',
    iconSize: 24,
    '--padding': 36 + 'px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input placeholder={placeholder} />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: block;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border);
  font-size: var(--fontSize);
  padding-left: var(--padding);
  outline-offset: 2px;
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

export default IconInput;

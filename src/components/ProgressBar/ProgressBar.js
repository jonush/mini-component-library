/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
    '--padding': 0 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  
  return (
    <ProgressWrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={styles}
    >
      <Progress value={value} />
    </ProgressWrapper>
  )
};

export default ProgressBar;

const ProgressWrapper = styled.div`
  height: var(--height);
  border-radius: var(--borderRadius); 
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`

const Progress = styled.div`
  background: ${COLORS.primary};
  border-radius: 4px;
  width: ${props => (props.value / 1) + '%'};
  height: 100%;


  ${({value}) => value < 100 && `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `}
`
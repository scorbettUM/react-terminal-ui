import React, { useState, useEffect, useRef, KeyboardEvent, ChangeEvent, ReactNode, ReactNodeArray } from 'react';
import TerminalInput from './linetypes/TerminalInput';
import TerminalOutput from './linetypes/TerminalOutput';
import './style.css';

export enum ColorMode {
  Light,
  Dark
}

export interface Props {
  name?: string
  prompt?: string
  colorMode?: ColorMode
  children?: ReactNode;
  onInput?: ((input: string) => void) | null | undefined,
  startingInputValue?: string
}

const Terminal = ({name, colorMode, children, startingInputValue = ""}: Props) => {
  const [currentLineInput, setCurrentLineInput] = useState('');

  const updateCurrentLineInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentLineInput(event.target.value);
  }

  useEffect(() => {
    setCurrentLineInput(startingInputValue.trim());
  }, [startingInputValue]);


  const classes = ['react-terminal-wrapper'];
  if (colorMode === ColorMode.Light) {
    classes.push('react-terminal-light');
  }
  return (
    <div className={ classes.join(' ') } data-terminal-name={ name }>
      <div className="react-terminal">
        { children }
      </div>
      <input className="terminal-hidden-input" placeholder="Terminal Hidden Input" value={ currentLineInput } onChange={ updateCurrentLineInput } />
    </div>
  );
}

export { TerminalInput, TerminalOutput };
export default Terminal;

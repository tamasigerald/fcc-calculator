import React from 'react';
import styled from 'styled-components';


export function ThemeBtn({themeToggler}) {

    return (
        <Button onClick={themeToggler}>theme</Button>
    )
}

const Button = styled.button`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
    outline: none;
`
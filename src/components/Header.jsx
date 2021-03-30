import styled from 'styled-components';
import { ThemeBtn } from './ThemeBtn';

export function Header({themeToggler, ...props}) {

    

    return (
        <HeaderWrapper>
            <Title>fcc Calc</Title>
            <ThemeBtn themeToggler={themeToggler} />
        </HeaderWrapper>
    )
}

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100vw;
    border-bottom: 1px solid ${props => props.theme.colors.secondary};
`

const Title = styled.h1`
    font-family: monospace;
    font-size: 3.5rem;
    font-weight: bold;
`
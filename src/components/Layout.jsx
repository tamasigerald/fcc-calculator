import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export function Layout() {
    const [prevValue, setPrevValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [op, setOp] = useState(null);
    const [result, setResult] = useState("0");

    useEffect(() => {}, [op, nextValue, prevValue]);

    const Operations = {
        "/": (a, b) => a / b,
        "*": (a, b) => a * b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "=": (a, b) => b,
    }

    const operate = () => {
        let temp = Operations[op] (
            parseFloat(prevValue),
            parseFloat(nextValue)
        );
        setOp(null);
        setNextValue(String(temp));
        setResult(String(temp));
        setPrevValue(null);
    }

    const numify = (number) => {
        setNextValue(nextValue === '0' ? String(number) : nextValue + number);
    }

    const dotSign = () => {
        if (!/\./.test(nextValue)) {
            setNextValue(nextValue + ".");
        }
    }

    const clearData = () => {
        setNextValue(0);
        setPrevValue('');
    };

    const handleOperation = (e) => {
        let value = e.target.innerHTML;

        if (value in Operations) {
            if (op === null) {
                setOp(value);
                setPrevValue(nextValue);
                setNextValue('');
            }
            if (op) {
                setOp(value);
            }
            if (prevValue && op && nextValue) {
                operate();
            }
        }
        
        else if (value === 'AC') {
            clearData();
        }

        else if (value === '.') {
            dotSign();
        }

        else {
            numify(parseInt(value, 10));
        } 
    }


    return (
        <Wrapper>
            <Display>
                <OperationDisplay>{prevValue} {op} {nextValue}</OperationDisplay>
                <ResultDisplay>{result}</ResultDisplay>
            </Display>


            <KeyWrapper>

                <Key onClick={handleOperation} id="add" fn>+</Key>
                <Key onClick={handleOperation} id="subtract" fn>-</Key>
                <Key onClick={handleOperation} id="multiply" fn>*</Key>
                <Key onClick={handleOperation} id="divide" fn>/</Key>
                <Key onClick={handleOperation} id="seven">7</Key>
                <Key onClick={handleOperation} id="eight">8</Key>
                <Key onClick={handleOperation} id="nine">9</Key>
                <Key onClick={handleOperation} id="four">4</Key>
                <Key onClick={handleOperation} id="five">5</Key>
                <Key onClick={handleOperation} id="six">6</Key>
                <Key onClick={handleOperation} id="one">1</Key>
                <Key onClick={handleOperation} id="two">2</Key>
                <Key onClick={handleOperation} id="three">3</Key>
                <Key onClick={handleOperation} id="zero">0</Key>
                <Key onClick={handleOperation} id="decimal">.</Key>
                <Key onClick={handleOperation} as="div" emoji>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M14.829,14.828c-0.185,0.184-0.384,0.349-0.592,0.489c-0.217,0.146-0.445,0.27-0.68,0.369 c-0.244,0.103-0.496,0.181-0.749,0.233c-0.531,0.108-1.087,0.108-1.616,0c-0.254-0.052-0.506-0.13-0.75-0.233 c-0.234-0.099-0.463-0.223-0.679-0.369c-0.209-0.141-0.408-0.305-0.593-0.489c-0.181-0.181-0.346-0.38-0.488-0.592l-1.658,1.119 c0.215,0.318,0.462,0.617,0.734,0.889c0.273,0.273,0.572,0.52,0.887,0.731c0.323,0.218,0.666,0.404,1.02,0.553 c0.365,0.154,0.744,0.272,1.128,0.35C11.189,17.959,11.596,18,12,18s0.811-0.041,1.208-0.122c0.383-0.078,0.762-0.196,1.127-0.35 c0.354-0.149,0.696-0.335,1.021-0.553c0.313-0.212,0.612-0.458,0.886-0.731c0.272-0.271,0.52-0.571,0.734-0.889l-1.658-1.119 C15.175,14.448,15.01,14.647,14.829,14.828z"></path><circle cx="8.5" cy="10.5" r="1.5"></circle><circle cx="15.493" cy="10.493" r="1.493"></circle></svg>
                smile
                </Key>
                <Key onClick={handleOperation} id="clear" ac>AC</Key>
                <Key onClick={handleOperation} id="equals" equal>=</Key>
            </KeyWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(80vh - 105px);
    max-height: 600px;
    max-width: 450px;
    width: 95vw;
    border: 2px solid ${props => props.theme.colors.secondary};
    padding: 1rem;

`

const Display = styled.div`
    position: relative;
    border: 1px solid ${props => props.theme.colors.primary};
    height: 15%;
    width: 100%;
`

const OperationDisplay = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2.5rem;
`

const ResultDisplay = styled.div`
    position: absolute;
    bottom: 0rem;
    right: 1rem;
    font-size: 4rem;
`

const KeyWrapper = styled.div`
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(4, 1fr);
    height: 83%;
    width: 100%;
`

const Key = styled.button`
    cursor: pointer;
    background-color: ${props => props.theme.colors.body};
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-size: 3rem;
    font-weight: bold;

    ${props => props.fn && css`
        background-color: ${props => props.theme.colors.secondary};
        border-color: ${props => props.theme.colors.secondary};
    `}

    ${props => props.emoji && css`
        display: flex;
        align-items: center;
        justify-content: center;
        border-color: transparent;
        fill: ${props => props.theme.colors.secondary};
        font-size: 2rem;
        
        & svg {
            transform: rotate(-20deg);
        }
    `}

    ${props => props.equal && css`
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        grid-column: -2;
        grid-row: 3 / span 3;
    `}

    ${props => props.ac && css`
        background-color: ${props => props.theme.colors.red};
        border-color: ${props => props.theme.colors.red};
        grid-column: -2;
        grid-row: 2 / span 1;
    `}
`


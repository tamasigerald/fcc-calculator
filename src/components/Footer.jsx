import styled from 'styled-components';

import { HeaderWrapper } from './Header';

export function Footer() {
    return (
        <FooterWrapper as="footer">
            <Text>&copy; Gerald Andrei Tamasi</Text>
            <Link href="">www.tamasigerald.com</Link>
        </FooterWrapper>
    );
}

const FooterWrapper = styled(HeaderWrapper)`
    top: auto;
    bottom: 0;
    height: 45px;
    flex-direction: column;
`

const Text = styled.p`

`

const Link = styled.a`
    color: ${props => props.theme.colors.text};
    text-decoration: none;
`
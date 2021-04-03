import styled from 'styled-components';
import { primaryBackground } from '@styles/mixins.js';
import Image from 'next/image';

const AppBar = styled.div`
    ${primaryBackground}
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 2px #00000033;
`;

const SiteTitle = styled.h1`
    font-size: 1rem;
    display: inline;
`;

const Header = ({ props }) => {
    return (
        <AppBar>
            <Image src="/octetlet-logo.svg" height={50} width={50} />
            <SiteTitle>This is the App Bar</SiteTitle>
        </AppBar>
    );
};

export default Header;

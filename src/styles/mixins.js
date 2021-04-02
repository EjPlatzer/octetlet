import { css } from 'styled-components';

export const primaryBackground = css`
    background: ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.palette.text};
`;

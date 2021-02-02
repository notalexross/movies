import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding-top: ${({ ratio }) => `calc(100% * ${ratio})`};
    position: ${({ ratio }) => ratio ? 'relative' : 'unset'};
`

export const Icon = styled.i`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    text-align: center;
    
    font-size: ${({ fontSize }) => fontSize};
    // @media (min-width: 900px) {
    //     font-size: 8rem;
    // }
`

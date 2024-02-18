import styled from "styled-components";

export const Form = styled.form`
    background-color: #2A2C36;
    border-radius: 30px;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    padding: 15px 15px 30px 15px;
    position: absolute;
    top: 305px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 335px;

    @media (min-width: 768px) and (max-width: 1199px) {
    padding: 50px 15px 50px 15px;
    top: 444px;
    width: 500px;
}

    @media (min-width: 1200px) {
    left: 75%;
    padding: 15px 15px 50px 15px;
    top: 15%;
    width: 500px;
}
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -2%;
    line-height: 1.17;
    margin-bottom: 35px;
    margin-left: 17px;
    margin-top: 10px;
`

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: relative;
`;

export const Input = styled.input`
    background-color: #2A2C36;
    border: 1px solid;
    border-radius: 6px;
    color: #fafafa;
    opacity: 0.4;
    font-size: 14px;
    height: 45px;
    letter-spacing: -2%;
    margin: 0 auto;
    margin-bottom: 3px;
    padding-left: 40px;
    padding-top: 4px;
    width: 279px;

    &::placeholder {
        font-size: 14px;
        opacity: 0.8;
    }

    &:focus,
    :hover {
        border-color: #fafafa;
        outline: 0;
        opacity: 1;
    }

`;

export const Icon = styled.svg`
    fill: #FAFAFA;
    stroke: #FAFAFA;
    height: 18px;
    width: 18px;
    position: absolute;
    top: 15px;
    left: 26px;

`

export const Button = styled.button`
    background-color: #8BAA36;
    border: 1px solid #8BAA36;;
    border-radius: 6px;
    color: #fafafa;
    cursor: pointer;
    font-size: 16px;
    height: 45px;
    line-height: 1.13;
    margin: 0 auto;
    width: 279px;

    &:focus,
    :hover {
        color: #22252A;
        outline: 0;
        opacity: 1;
    }

`;
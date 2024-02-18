import styled from "styled-components";

export const Form = styled.form`
    background-color: #2A2C36;
    border-radius: 30px;
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
    color: #fafafa;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -2%;
    line-height: 1.17;
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const Input = styled.input`
    background-color: #2A2C36;
    border: 1px solid #fafafa;
    border-radius: 6px;
    color: #fafafa;
    font-size: 14px;
    height: 45px;
    letter-spacing: -2%;
    width: 279px;
`;
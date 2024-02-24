import styled from "styled-components";
import { ReactComponent as Error } from '../../images/ui/input/input_error.svg';
import { ReactComponent as Ok } from '../../images/ui/input/input_ok.svg';
import { ReactComponent as Warning } from '../../images/ui/input/input_warning.svg';

export const Form = styled.form`
    background-color: #2A2C36;
    border-radius: 30px;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    padding: 25px 20px 25px 20px;
    width: 89vw;
    max-width: 335px;
    position: absolute;
    top: 93.5%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -120%);

    @media (min-width: 768px) and (max-width: 1199px) {
    padding: 50px 15px 50px 15px;
    width: 65vw;
    max-width: 500px;
    top: 96%;
}

    @media (min-width: 1200px) {
    padding: 15px 15px 50px 15px;
    width: 35vw;
    max-width: 500px;
    left: 72%;
}
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -2%;
    line-height: 1.17;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-top: 0;

    @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 25px;
}

    @media (min-width: 1200px) {
    font-size: 28px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 20px;
}
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
    height: 6vh;
    max-height: 45px;
    letter-spacing: -2%;
    margin: 0 auto;
    margin-bottom: 3px;
    padding-left: 40px;
    padding-top: 4px;
    width: 74vw;
    max-width: 279px;

    
    border-color: ${props => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};

    &::placeholder {
        color: #fafafa;
        font-family: Poppins;
        font-size: 14px;
    }

    &:focus,
    &:hover {
        border-color: ${props => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};
        opacity: 1;
        outline: 0;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
    height: 6vh;
    max-height: 59px;
    padding-left: 45px;
    width: 52vw;
    max-width: 400px;

    &::placeholder {
      font-size: 18px;
    }
}

    @media (min-width: 1200px) {
    font-size: 18px;
    height: 8vh;
    max-height: 59px;
    padding-left: 55px;
    width: 28vw;
    max-width: 400px;

    &::placeholder {
      font-size: 18px;
    }
}
`;

export const Icon = styled.svg`
    fill: transparent;
    height: 18px;
    width: 18px;
    position: absolute;
    top: 26px;
    left: 30px;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    stroke: ${(props) => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return '#FAFAFA';
  }};

    @media (min-width: 768px) and (max-width: 1199px) {
    height: 24px;
    width: 24px;
    left: 10.5%;
}

    @media (min-width: 1200px) {
    height: 24px;
    width: 24px;
    left: 11%;
    top: 35px;
}
`

export const Button = styled.button`
    background-color: #8BAA36;
    border: 1px solid #8BAA36;;
    border-radius: 6px;
    color: #fafafa;
    cursor: pointer;
    font-size: 16px;
    height: 6vh;
    max-height: 45px;
    line-height: 1.13;
    padding: 0;
    margin: 0 auto;
    margin-top: 25px;
    width: 74vw;
    max-width: 322px;
    transition-duration: 0.5s;

    &:focus,
    &:hover {
        color: #22252A;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
    height: 6vh;
    max-height: 59px;
    margin-top: 20px;
    width: 52vw;
    max-width: 448px;
}

    @media (min-width: 1200px) {
    font-size: 18px;
    height: 8vh;
    max-height: 59px;
    width: 32vw;
    max-width: 450px;
}
`

export const ErrorMessageStyled = styled.div`
    color: #E74A3B;
    font-family: Poppins;
    font-size: 12px;
    margin-left: 10px;


    @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 25px;
}

    @media (min-width: 1200px) {
    margin-left: 20px;
}
`;

export const ErrorIconStyled = styled(Error)`
    position: relative;
    top: -38px;
    right: -290px;

    @media (min-width: 768px) and (max-width: 1199px) {
    right: -435px;
}

    @media (min-width: 1200px) {
    top: -45px;
    right: -88%;
}
`;

export const WarnIconStyled = styled(Warning)`
  position: relative;
    top: -38px;
    right: -290px;

    @media (min-width: 768px) and (max-width: 1199px) {
    right: -435px;
}

    @media (min-width: 1200px) {
    top: -45px;
    right: -88%;
}
`;

export const OkIconStyled = styled(Ok)`
  position: relative;
    top: -38px;
    right: -290px;

    @media (min-width: 768px) and (max-width: 1199px) {
    right: -435px;
}

    @media (min-width: 1200px) {
    top: -45px;
    right: -88%;
}
`;

export const PasswordStrength = styled.div`
  color: ${(props) => {
    if (props.strength === 'Very Weak') return '#E74A3B';
    if (props.strength === 'Weak') return '#E67E22';
    if (props.strength === 'Medium') return '#F1C40F';
    if (props.strength === 'Strong') return '#2ECC71';
    return 'transparent';
  }};
  font-family: Poppins;
  font-size: 12px;
  position: relative;
  margin-left: 10px;
  top: -13px;

  @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 25px;
  }

  @media (min-width: 1200px) {
    margin-left: 20px;
  }
`;
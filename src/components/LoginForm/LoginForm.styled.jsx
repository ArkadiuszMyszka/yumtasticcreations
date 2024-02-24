import styled from 'styled-components';
import { ReactComponent as Error } from '../../images/ui/input/input_error.svg';
import { ReactComponent as Ok } from '../../images/ui/input/input_ok.svg';

export const ErrorIconStyled = styled(Error)`
    position: relative;
    top: -65px;
    right: -290px;

    @media (min-width: 768px) and (max-width: 1199px) {
    right: -435px;
    top: -68px;
}

    @media (min-width: 1200px) {
    top: -72px;
    right: -88%;
}
`;

export const OkIconStyled = styled(Ok)`
  position: relative;
    top: -65px;
    right: -290px;

    @media (min-width: 768px) and (max-width: 1199px) {
    right: -435px;
    top: -68px;
}

    @media (min-width: 1200px) {
    top: -72px;
    right: -88%;
}
`;
import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const FollowUsContainer = styled.div`
  display: none;
  padding-bottom: 100px;

  @media screen and (min-width: 1440px) {
    display: block;
    flex-direction: column;
  }
`;

export const BoxTitle = styled.h2`
  @media screen and (min-width: 1440px) {
    display: inline-block;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    padding-bottom: 40px;

    color: #3e4462;
  }
`;

export const IconList = styled.ul`
  @media screen and (min-width: 1440px) {
    display: flex;
    margin-top: 0;
    margin-bottom: 0;

    gap: 20px;
  }
`;
export const IconItem = styled.li`
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  @media screen and (min-width: 1440px) {
    color: #8baa36;
    text-decoration: none;
    & > svg {
      width: 25px;
      height: 25px;
    }
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #22252a;
  }
`;

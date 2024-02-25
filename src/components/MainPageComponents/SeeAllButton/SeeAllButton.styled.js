import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SeeAllBtn = styled(Link)`
  display: flex;
  border: none;
  background-color: #8aa936;
  color: white;
  border-radius: 6px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 24px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #22252a;
  }
`;
import styled, { css } from "styled-components";
import { shade } from "polished";

interface IButtonTab {
  isActive: boolean;
}

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
`;

export const TabContainer = styled.div`
  display: flex;
`;

export const PanelsContainer = styled.div`
  border-radius: 0 0 16px 16px;
  padding: 16px;
`;

export const PanelContainer = styled.div``;

export const ButtonTab = styled.button<IButtonTab>`
  background: transparent;
  height: 56px;
  border-radius: 16px 16px 0 0;
  border: 0;
  padding: 0 16px;
  color: #f4ede8;
  width: 100%;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${shade(0.1, "#f4ede8")};
  }

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 4px solid #61dafb;
    `}

  ${(props) =>
    !props.isActive &&
    css`
      color: #666360;
    `}
`;

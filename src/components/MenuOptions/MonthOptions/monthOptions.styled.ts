import styled from "styled-components";

const BodyModel = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  width: calc(100% / 3);
  height: calc(100% / 4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.span`
  width: 53px;
  height: 26px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ItemText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
`;

export { BodyModel, Cell, Item, ItemText };

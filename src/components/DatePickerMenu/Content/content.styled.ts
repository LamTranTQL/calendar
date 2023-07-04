import styled from "styled-components";

const Model = styled.div`
  width: 100%;
  height: 240px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.ul`
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Cell = styled.li`
  width: calc(100% / 7);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    border: 1px solid #072947;
  }
`;

const Item = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
`;

const ItemDesc = styled(Item)`
  color: #bcbcbc;
`;

export { Model, Row, Cell, Wrapper, Item, ItemDesc };

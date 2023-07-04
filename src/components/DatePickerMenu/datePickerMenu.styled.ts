import styled from "styled-components";

const Model = styled.div`
  width: 280px;
  height: 278px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 0px 16px 0px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border-top: 1px solid #dedede;
`;

export { Model, Bottom };

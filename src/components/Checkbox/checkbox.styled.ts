import { styled } from "styled-components";

const Model = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px 4px;
  cursor: pointer;
`;

const CheckboxContainer = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  cursor: inherit;
`;

const Input = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  z-index: 1;
  cursor: inherit;
`;

const Plate = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid #bcbcbc;
  background: #ffffff;
  cursor: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconCheck = styled.img`
  width: 14px;
  height: 14px;
  cursor: inherit;
`;

const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
  cursor: inherit;
`;

export { Model, CheckboxContainer, Input, Plate, IconCheck, Text };

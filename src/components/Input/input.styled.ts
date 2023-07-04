import styled from "styled-components";

const Model = styled.div`
  width: 160px;
  height: 64px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
`;

const Wrapper = styled.div`
  width: 160px;
  height: 40px;
  padding: 7px 27px 7px 11px;
  border-radius: 4px;
  border: 1px solid #cdcdcd;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid #205d94;
  }
`;

const Select = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
`;

const IconCalendar = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 11px;
  right: 11px;
  bottom: 11px;
`;

export { Model, Label, Wrapper, Select, IconCalendar };

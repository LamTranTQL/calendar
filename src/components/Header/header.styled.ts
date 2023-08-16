import { styled } from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 38px;
  padding: 9px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedede;
`;

const Navigation = styled.div`
  width: 36px;
  height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0px 4px;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #3a3a3a;
`;

const PortalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { HeaderContainer, Navigation, Title, FlexRow, PortalContainer };

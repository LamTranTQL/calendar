import React, { useContext } from "react";
import {
  FlexRow,
  HeaderContainer,
  Navigation,
  PortalContainer,
} from "./header.styled";
import IconArrowLeft from "./Icon/arrow-left.svg";
import IconArrowDoubleLeft from "./Icon/arrow-double-left.svg";
import IconArrowRight from "./Icon/arrow-right.svg";
import IconArrowDoubleRight from "./Icon/arrow-double-right.svg";
import ButtonIcon from "../Button/ButtonIcon/buttonIcon.component";
import { CalendarContext } from "../Context/calendarContext.provider";
import ButtonText from "../Button/ButtonText/buttonText.component";

function Header() {
  const {
    Months,
    currMonth,
    currYear,
    setCurrMonth,
    setCurrYear,
    isMonthOptions,
    setIsMonthOptions,
  } = useContext(CalendarContext);

  const handlePrevMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const handlePrevYear = () => {
    setCurrYear(currYear - 1);
  };

  const handleNextYear = () => {
    setCurrYear(currYear + 1);
  };

  const handleBtnMonthCLick = () => {
    setIsMonthOptions(!isMonthOptions);
  };

  return (
    <>
      <HeaderContainer>
        <Navigation>
          <ButtonIcon onClick={handlePrevYear} icon={IconArrowDoubleLeft} />
          <ButtonIcon onClick={handlePrevMonth} icon={IconArrowLeft} />
        </Navigation>
        <FlexRow>
          <ButtonText
            onClick={handleBtnMonthCLick}
            children={Months[currMonth]}
          />
          <ButtonText children={currYear} />
        </FlexRow>
        {/* <Title>{`${Months[currMonth]} ${currYear}`}</Title> */}
        <Navigation>
          <ButtonIcon onClick={handleNextMonth} icon={IconArrowRight} />
          <ButtonIcon onClick={handleNextYear} icon={IconArrowDoubleRight} />
        </Navigation>
      </HeaderContainer>
    </>
  );
}

export default Header;

import React, { useRef, useState } from "react";
import {
  CheckboxContainer,
  IconCheck,
  Input,
  Model,
  Plate,
  Text,
} from "./checkbox.styled";
import ValidationCheck from "./Validation-Check.svg";

export default function Checkbox() {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const plateRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    if (isCheck) {
      if (plateRef.current) {
        plateRef.current.style.border = "1px solid #bcbcbc";
        plateRef.current.style.backgroundColor = "#ffffff";
      }
      setIsCheck(!isCheck);
    } else {
      if (plateRef.current) {
        plateRef.current.style.border = "none";
        plateRef.current.style.backgroundColor = "#093359";
      }
      setIsCheck(!isCheck);
    }
  };

  return (
    <Model htmlFor="single-date">
      <CheckboxContainer>
        <Input id="single-date" onClick={handleClick} />
        <Plate ref={plateRef}>
          {isCheck && <IconCheck src={ValidationCheck} />}
        </Plate>
      </CheckboxContainer>
      <Text>Single date</Text>
    </Model>
  );
}

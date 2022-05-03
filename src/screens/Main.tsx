import React from "react";
import { Header } from "components/Header";
import { Wrapper } from "components/Wrapper/Wrapper";
import { Field } from "components/Field/Field";

export const Main: React.FC<unknown> = () => (
  <>
    <Header title={"Game of Life"} />
    <Wrapper>
      <Field rows={10} column={10} />
    </Wrapper>
  </>
);

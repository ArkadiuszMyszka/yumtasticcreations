import { TitleText, Wrapper, Section } from "./Title.styled.js";

const Title = ({ children }) => {
  return (
    <Section>
      <Wrapper>
        <TitleText>{children}</TitleText>
      </Wrapper>
    </Section>
  );
};

export default Title;

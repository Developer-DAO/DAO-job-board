import styled from "styled-components";

export const Box = styled.div`
  box-sizing: border-box;
  border: 0px solid #000000;
  box-shadow: 0px 0px 4px 2px #e2e8f0;
  background: #ffffff;
  border-radius: 18px;
  width: 70%;
  height: fit-content;
  padding: 1%;
  padding-top: 0.2%;
  padding-bottom: 0.2%;
  margin: auto;
  margin-top: 2.5%;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    box-shadow: 0 0 0 0;
    height: 100%;
    margin: auto;
    padding: 0%;
    width: 100%;
    background: #F7FAFC;
  }
`;

export const DevDAOIcon = styled.div`
  border-radius: 180px;
  margin: auto;
  overflow: hidden;
`;

export const Hero = styled.section`
  text-align: center;
  margin: auto;
  margin-top: 2.5%;
`;
export const Copy = styled.div`
  margin: auto;
  max-width: 60%;

  @media (max-width: 650px) {
    margin: auto;
    top: 5rem;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 1.75rem;
`;

export const Title2 = styled.h2`
  color: gray;
  font-size: 1.5rem;
`;

export const List = styled.li`
  margin: 10px;
  margin-left: -25px;
`;

export const LinkWrap = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Break = styled.hr`
  opacity: 0.25;
  width: 100%;

`;

export const BoxTop = styled.div`
  position: relative;
  top: -20%;
  font-size: 1rem;
  text-align: center;
`;

export const InputSection = styled.div`
  position: relative;
  top: 50%;
`;

export const Input = styled.input`
  position: relative;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  width: 98%;
  height: 50px;
  font-size: 1rem;
  font-family: "InterVariable";
  padding: 5px;

  &:focus {
    border-color: #97c0e6;
  }
`;

export const InputTitles = styled.h2`
  position: relative;
  font-size: 0.9rem;
`;

export const Selector = styled.select`
  background-color: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  height: 63px;
  padding: 5px;
  margin-right: 5px;
  font-family: "InterVariable";
`;

export const Checkbox = styled.input`
  position: relative;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  font-size: 1rem;
  padding: 5px;
`;

export const Textarea = styled.textarea`
  resize: vertical;
  border-radius: 6px;
  background: white;
  border: 1px solid #e2e8f0;
  box-sizing: border-box;
  width: 99.5%;
  height: 8rem;
  padding: 5px;
  font: 1rem "InterVariable";
`;

export const Description = styled.div`
  position: relative;
  top: 20%;
  margin-right: 5%;
  font-size: 80%;
  text-align: justify;
`;

export const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-auto-rows: 2rem;
  grid-gap: 1.5rem;
  width: 100%;
`;

export const ButtonSection = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
`;

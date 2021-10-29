import styled from 'styled-components';

export const Top = styled.div`
  position: relative;
  top: -20%;
  font-size: 1rem;
  text-align: center;
`;

export const InputSection = styled.div`
  position: relative;
  top: 50%
`;

export const Input = styled.input`
  position: relative;
  border-radius: 6px;
  border: 1px solid #000000;
  width: 89%;
  height: 50px;
  font-size: 1rem;
  font-family: 'Inter';
  padding: 5px;
`;

export const InputTitles = styled.h2`
  position: relative;
  font-size: 1rem;
`;

export const Selector = styled.select`
  background-color: white;
  border-radius: 6px;
  border: 1px solid #000000;
  height: 63px;
  padding: 5px;
  margin-right: 5px;
  font-family: 'Inter';
`;

export const Checkbox = styled.input`
  position: relative;
  border-radius: 6px;
  border: 1px solid #000000;
  font-size: 1rem;
  padding: 5px;
`;

export const Textarea = styled.textarea`
  resize: vertical;
  border-radius: 6px;
  background: white;
  border: 1px solid #000000;
  box-sizing: border-box;
  width: 90%;
  height: 8rem;
  padding: 5px;
  font: 1rem 'Inter';
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

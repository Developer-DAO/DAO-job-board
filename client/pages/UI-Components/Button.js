import styled from 'styled-components'

export default function Button({children}) {
  return <Button1>
          {children}
        </Button1>;
}

const Button1 = styled.button`
  background-color: EDF2F7;
  width: auto;
  border-radius: 0.375rem;
  align-items: center;
  border-style: none;
  color: black;
  cursor: pointer;
  font-size: 14px;
  height: 2rem;
  line-height: normal;
  padding: 0.5rem 1rem;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-sizing: border-box;
  transition: all 0.5s ease;
  margin: 5px;

  &:hover {
    background-color: #E2E9F0;
  }
`;

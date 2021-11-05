import styled, { CSSProperties } from "styled-components";

export type ButtonProps = {
  children?: React.ReactNode;
  styling: "normal" | "skill" | "option" | "positive" | "negative" | string;
};

export type ButtonStyle = {
  [key: string]: ButtonStyleProperties;
};

export type ButtonStyleProperties = {
  backgroundColor: string;
  hoverBgColor: string;
  color: string;
  border?: string;
};

export default function Button({ children, styling }: ButtonProps) {
  const STYLES: ButtonStyle = {
    normal: {
      backgroundColor: "#EDF2F7",
      hoverBgColor: "#E2E9F0",
      color: "black",
    },
    skill: {
      backgroundColor: "#EDF2F7",
      hoverBgColor: "#CDCDCD",
      color: "black",
    },
    option: {
      backgroundColor: "#3182CE",
      hoverBgColor: "#2B6CB0",
      color: "white",
    },
    positive: {
      backgroundColor: "#38A169",
      hoverBgColor: "#2F855A",
      color: "white",
    },
    negative: {
      backgroundColor: "#DD6B20",
      hoverBgColor: "#C05621",
      color: "white",
    },
  };

  const styles = STYLES[styling];

  if (!styles) {
    throw new Error("You did not declare styling props...");
  }

  return (
    <Button1
      style={
        {
          "--color": styles.color,
          "--backgroundColor": styles.backgroundColor,
          "--hoverBgColor": styles.hoverBgColor,
          "--border": styles.border,
        } as CSSProperties
      }
    >
      {children}
    </Button1>
  );
}

const Button1 = styled.button`
  background-color: var(--backgroundColor);
  color: var(--color);
  border: var(--border);
  font-size: 14px;
  padding: 0.5rem 1rem;
  width: auto;
  height: 2rem;
  border-radius: 0.375rem;
  align-items: center;
  border-style: none;
  cursor: pointer;
  line-height: normal;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-sizing: border-box;
  transition: all 0.5s ease;
  margin: 5px;

  &:hover {
    background-color: var(--hoverBgColor);
  }
`;

import styled, { CSSProperties } from "styled-components";

export type ButtonProps = {
  children?: React.ReactNode;
  styling: "normal" | "category" | "black" | "red" | "blue" | "positive" | "negative" | string;
  type?: "reset" | "submit" | "button"| string;
  onClick?: (event: React.MouseEvent) => void;
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

export default function Button({children, styling, type, onClick}:ButtonProps) {

const STYLES = {
  normal: {
    backgroundColor: '#EDF2F7',
    hoverBgColor: '#E2E9F0',
    color: 'black'
  },
  category: {
    backgroundColor: '#E2E9F0',
    hoverBgColor: '#EDF2F7',
    color: 'black'
  },
  black: {
    backgroundColor: '#000000',
    hoverBgColor: '#30363D',
    color: 'white'
  },
  red: {
    backgroundColor: '#E2252B',
    hoverBgColor: '#BB5348',
    color: 'white'
  },
  blue: {
    backgroundColor: '#3B82F6',
    hoverBgColor: '#1D4ED8',
    color: 'white'
  },
  option: {
    backgroundColor: '#3182CE',
    hoverBgColor: '#2B6CB0',
    color: 'white'
  },
  positive: {
    backgroundColor: '#38A169',
    hoverBgColor: '#2F855A',
    color: 'white'
  },
  negative: {
    backgroundColor: '#DD6B20',
    hoverBgColor: '#C05621',
    color: 'white'
  }
}

const styles = STYLES[styling];

if (!styles) {
  throw new Error('You did not declare styling props...');
}

return <Button1
          style={{
            '--color': styles.color,
            '--backgroundColor': styles.backgroundColor,
            '--hoverBgColor': styles.hoverBgColor,
            '--border': styles.border
          } as CSSProperties
        }
          type={type || 'button'}
          onClick={onClick}
       >
        {children}
      </Button1>;
}

const Button1 = styled.button`
background-color: var(--backgroundColor);
color: var(--color);
border: var(--border);
font-size: 14px;
padding: 0.3rem 1rem;
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

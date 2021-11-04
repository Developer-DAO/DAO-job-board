import styled from 'styled-components'

export default function Button({children, styling}) {

  const STYLES = {
    normal: {
      backgroundcolor: '#EDF2F7',
      hoverbgcolor: '#E2E9F0',
      color: 'black'
    },
    category: {
      backgroundcolor: '#EDF2F7',
      hoverbgcolor: '#CDCDCD',
      color: 'black'
    },
    option: {
      backgroundcolor: '#3182CE',
      hoverbgcolor: '#2B6CB0',
      color: 'white'
    },
    positive: {
      backgroundcolor: '#38A169',
      hoverbgcolor: '#2F855A',
      color: 'white'
    },
    negative: {
      backgroundcolor: '#DD6B20',
      hoverbgcolor: '#C05621',
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
              '--backgroundcolor': styles.backgroundcolor,
              '--hoverbgcolor': styles.hoverbgcolor,
              '--border': styles.border
            }}
         >
          {children}
        </Button1>;
}

const Button1 = styled.button`
  background-color: var(--backgroundcolor);
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
    background-color: var(--hoverbgcolor);
  }
`;

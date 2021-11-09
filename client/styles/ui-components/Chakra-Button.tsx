import { Button, ButtonGroup } from "@chakra-ui/react"

export const ButtonBlack = ({children, onClick}) => {
  return <Button
  size="sm"
  bgColor= "#000000"
  _hover={{bg: "#30363D"}}
  textColor= 'white'
  m="5px"
  fontSize="14px"
  onClick={onClick}>
  {children}
  </Button>
}

export const ButtonGray = ({children, onClick}) => {
  return <Button
    bgColor="#EDF2F7"
    textColor="black"
    _hover={{bg: "#E2E9F0"}}
    m="5px"
    ms="0px"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonGray2 = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#E2E9F0"
    textColor="black"
    _hover={{bg: "#EDF2F7"}}
    m="5px"
    ms="0px"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonGreen = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#38A169"
    textColor="white"
    _hover={{bg: "#2F855A"}}
    m="5px"
    ms="0px"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonRed = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#E2252B"
    textColor="white"
    _hover={{bg: "#BB5348"}}
    m="5px"
    ms="0px"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonOrange = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#DD6B20"
    textColor="white"
    _hover={{bg: "#C05621"}}
    m="5px"
    ms="0px !important"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonBlue = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#3B82F6"
    textColor="white"
    _hover={{bg: "#1D4ED8"}}
    m="5px"
    ms="0px" 
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export const ButtonBlue2 = ({children, onClick}) => {
  return <Button
    size="sm"
    bgColor="#3182CE"
    textColor="white"
    _hover={{bg: "#2B6CB0"}}
    m="5px"
    ms="0px"
    w="auto"
    fontSize="14px"
    onClick={onClick}
    >
    {children}
  </Button>
}

export type ButtonProps = {

    text?: string 
    textColor?: string 
    bgColor?: string
    clickEvent?:  ClickEvent
    borderColor?: string 
    icon?: IconDefinition
    borderSize?: string 
    paddingX?: string
    paddingY?: string
    children?: JSX.Element
    modifier?: string
    tip?: string
    isActive?: boolean
    disabled?: boolean
    iconModifier?: text
  }

  export interface NavigationLinks {
    link: string
    name: string 
  }
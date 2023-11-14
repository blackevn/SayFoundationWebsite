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

    
export interface ContextData {
  width: number
  height: number
  menuToggle: boolean
  handleToggle: () => void
  darkMode: boolean
  toggleDarkMode: () => void  
  setDarkMode?: Dispatch<SetStateAction<boolean>>
  setMenuToggle?:  Dispatch<SetStateAction<boolean>>

}


  export interface NavigationLinks {
    link: string
    name: string 
    path?: boolean
    clicked?: () => void
  }


export interface IProps {

  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
    
}
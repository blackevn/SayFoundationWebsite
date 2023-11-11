'use client'

interface BGProps {
    children: React.ReactNode | JSX.Element
}
const BG: React.FC<BGProps> = ({children}) => {
  return <div className="w-screen h-screen">
            <div className="bg-[url('/Circle')] absolute top-0 left-0"></div>
            <div className="bg-[url('/Circle')] absolute bottom-0 left-0"></div>
            {children}
         </div>
}

export default BG
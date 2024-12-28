import React from 'react'

interface MainLoginProps {
    children: React.ReactNode
    }
const MainLogin : React.FC<MainLoginProps>  = ({children}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between w-full rounded-xl bg-secondery/10 overflow-hidden my-5 py-5 md:py-0">
      <img
        src="/assets/login1.jpg"
        className="md:w-1/2 w-full h-[90vh] object-cover object-center hidden md:block"
        alt=""
      />
      {children}
</div>
  )
}

export default MainLogin

import Navbar from "./navbar"

interface ILayoutprops{
    children : React.ReactNode
}

function Layout({children}:ILayoutprops) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout
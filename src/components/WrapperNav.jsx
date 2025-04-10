import './WrapperNav.css'
function WrapperNav({breakpoint = 768, blur = false,children}) {
    const mobileMediaQuery = `
        @media (max-width: ${breakpoint}px) {
            nav.split-ui-wrapper-nav {
               display: none;
            }
        }
    `;
    if (blur) {
        return(
            <>
               <style>{mobileMediaQuery}</style>
                <nav className='split-ui-wrapper-nav blur'>
                    {children}
                </nav>
            </>
        )
    }
    return(
        <>
           <style>{mobileMediaQuery}</style>
            <nav className='split-ui-wrapper-nav'>
                {children}
            </nav>
        </>
    )
            
}
export default WrapperNav
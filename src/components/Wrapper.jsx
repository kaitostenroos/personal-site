import './Wrapper.css'
function Wrapper({width = '300px', blur = false, children}) {
    if (blur) {
        return(
            <div className="split-ui-wrapper blur" style={{ width: `${width}` }}>
                {children}
            </div>
        )
    }
    return(
        <div className="split-ui-wrapper" style={{ width: `${width}px` }}>
            {children}
        </div>
    )
        
}
export default Wrapper
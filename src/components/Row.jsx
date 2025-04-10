import './Row.css'
function Row({children}) {
    return(
       <div className='split-ui-row'>
            {children}
       </div> 
    ) 
}
export default Row
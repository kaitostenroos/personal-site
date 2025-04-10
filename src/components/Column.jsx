import './Column.css'
function Column({children}) {
    return(
       <div className='split-ui-column'>
            {children}
       </div> 
    ) 
}
export default Column
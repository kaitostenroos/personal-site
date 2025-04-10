import './Textbox.css'

function Textbox({children}) {
    return(
        <div className='split-ui-textbox'>
            {children}
        </div>
    )
}

export default Textbox
import './Textbox.css'

function Textbox({width = '300px', children}) {
    return(
        <div className='split-ui-textbox' style={{ width: `${width}` }}>
            {children}
        </div>
    )
}

export default Textbox
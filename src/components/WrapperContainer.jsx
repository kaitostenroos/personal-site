import './WrapperContainer.css'

function WrapperContainer({children}) {
    return(
        <div className='wrapper-container'>
            {children}
        </div>
    )
}

export default WrapperContainer
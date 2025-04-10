import './Button.css'
function Button({ text = "Button", rowStretch = false, colStretch = false }) {
    let buttonClasses = 'split-ui-button'
    if (colStretch) {
        buttonClasses += ' col-stretch'
    }
    if (rowStretch) {
        buttonClasses += ' row-stretch'
    }
    return (
        <button className={buttonClasses}>{text}</button>
    )

}
export default Button
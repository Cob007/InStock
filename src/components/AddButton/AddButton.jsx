import './AddButton.scss'
const AddButton = (props) => {

    const { handleClickAddButton } = props

    return (
        <div className='addbtn'
            onClick={handleClickAddButton}
        >
            <p className='addbtn__text'>+ Add New Item</p>
        </div>
    )
}

export default AddButton
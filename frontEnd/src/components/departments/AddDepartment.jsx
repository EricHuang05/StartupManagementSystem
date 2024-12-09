const AddDepartment = () => {
    return (
        <div>
            <div>
                <h3>Add Department</h3>
                <form>
                    <div>
                        <label htmlFor="dep_name">Department Name</label>
                        <input type="text" placeholder="Enter Name"/>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea name=""></>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddDepartment
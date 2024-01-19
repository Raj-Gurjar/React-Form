import React, { useState } from 'react'

export default function Form() {

    const [formData, setFormData] = useState({

        firstName: "", lastName: "", email: "", country: "", streetName: "", zipNum: '',
        stateName: "", cityName: "", comment: false, offer: false, candidate: false,
        noti: ""
    })

    console.log(formData);

    function changeHandler(event) {

        const { name, value, checked, type } = event.target
        //! For using controlled component we extracted all the arguments.

        setFormData(prevFormData => {

            return {
                ...prevFormData, //storing the previous state of form.

                //? [event.target.name]: event.target.value
                //adding in the previous state
                //for normal form handling we use above syntax(by this we are storing the whole data at a time , not of a single component).

                //! Using Controlled Components (we can tract the data of single component individually)

                [name]: type === "checkbox" ? checked : value
                //if it is a checkbox then send checked in name(name = checked) otherwise send name = value
            }


        })
    }
   //! Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        alert('Form submitted Successfully');
        console.log(" Form whole Data: ",formData);
        
    }

    return (
        <div className='form-cls'>
            <h1>React Form</h1>

            <form action="" onSubmit={handleSubmit}>

                <label>First Name</label>
                <input
                    type='text'
                    placeholder='Pranay'
                    name='firstName'
                    onChange={changeHandler}
                    value={formData.firstName}    // Value associated with this radio button when selected
                    
                />
                <label>Last Name</label>
                <input
                    type='text'
                    placeholder='Gupta'
                    name='lastName'
                    onChange={changeHandler}
                    value={formData.lastName}

                />
                <label>Email Address</label>
                <input
                    type='email'
                    placeholder='pgupta@duck.com'
                    name='email'
                    onChange={changeHandler}
                    value={formData.email}
                />

                {/* //! DropDown */}
                <label>Country</label>
                <select
                    name='country'
                    onChange={changeHandler}
                    value={formData.country}

                >
                    <option value="india">India</option>
                    <option value="aus">Aus</option>
                    <option value="usa">USA</option>
                </select>

                <label>Street Address</label>
                <input
                    type='text'
                    placeholder='123 Main St'
                    name='streetName'
                    onChange={changeHandler}
                    value={formData.streetName}
                />

                <label>City</label>
                <input
                    type='text'
                    placeholder='Asanol'
                    name='cityName'
                    onChange={changeHandler}
                    value={formData.cityName}
                />

                <label>State/Province</label>
                <input
                    type='text'
                    placeholder='123 Main St'
                    name='stateName'
                    onChange={changeHandler}
                    value={formData.stateName}
                />
                <label>Zip/Postal Code</label>
                <input
                    type='number'
                    placeholder='12335'
                    name='zipNum'
                    onChange={changeHandler}
                    value={formData.zipNum}
                />

                {/* //! CheckBox */}

                <fieldset>
                    <legend>By Email</legend>

                    <input
                        type='checkbox'
                        id='Cmnt'
                        name='comment'
                        onChange={changeHandler}
                        checked={formData.comment} // Reflects whether this radio button is selected
                    />
                    <label htmlFor='Cmnt'>
                        {/* <div> */}
                        Comments
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel?
                        {/* </div> */}
                    </label>
                    <br />

                    <input
                        type='checkbox'
                        id='Candi'
                        name='candidate'
                        onChange={changeHandler}
                        checked={formData.candidate}
                    />
                    <label htmlFor='Candi'>
                        {/* <div> */}
                        Candidates
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel?
                        {/* </div> */}
                    </label>
                    <br />

                    <input
                        type='checkbox'
                        id='Offer'
                        name='offer'
                        onChange={changeHandler}
                        checked={formData.offer}
                    />
                    <label htmlFor='Offer'>
                        {/* <div> */}
                        Offer
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vel?
                        {/* </div> */}
                    </label>

                </fieldset>

                {/* //! Radio Button */}
                <fieldset>
                    <legend>Push Notifications</legend>
                    <p>These are Delivers via SMS</p>

                    <input
                        type='radio'
                        id='noti1'
                        name='noti'
                        onChange={changeHandler}
                        value="noti1"         //TODO : very imp
                        checked={formData.noti === "noti1"} //TODO: very imp
                    />
                    <label htmlFor='noti1'>
                        Everything
                    </label>
                    <br />

                    <input
                        type='radio'
                        id='noti2'
                        name='noti'
                        onChange={changeHandler}
                        value="noti2"
                        checked={formData.noti === 'noti2'}
                    />
                    <label htmlFor='noti2'>
                        Same as mail
                    </label>
                    <br />

                    <input
                        type='radio'
                        id='noti3'
                        name='noti'
                        onChange={changeHandler}

                        value="noti3"
                        checked={formData.noti === 'noti3'}
                    />
                    <label htmlFor='noti3'>
                        No push Notifications
                    </label>


                </fieldset>

                <button>Save</button>

            </form>
        </div>
    )
}

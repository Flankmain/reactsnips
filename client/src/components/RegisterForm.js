import React from 'react';
import '../css/Form.css'
import '../css/Misc.css'

function RegisterForm(props) {
    return (
        <div className='content'>
            <form
                className='card'
                action="/user/register"
                id="register-form" method="POST">
                

                <div className='title'>Create an account.</div>
                
                <div className='input-container ic1'>
                    <input id="name" name="name" type="text" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="name" className='placeholder'> username </label>
                </div>

                <div className='input-container ic2'>
                    <input id="email" name="email" type="email" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="title" className='placeholder'> email address </label>
                </div>
                
                <div className='input-container ic2'>
                    <input id="password" name="password" type="text" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="text" className='placeholder'> password [min. 15 characters] </label>
                </div>

                <input type="submit" value="submit" className='submit clickable'/>

            </form>
        </div>
    );
}

export default RegisterForm;


/*
function RegisterForm() {

    return (
        <div>
            <h4>Register.</h4>
            <form 
                action="/user/register" 
                id="register-form" method="POST">
                
                <label for="name"> username </label>
                <input id="name" name="name" type="text" required/>
                
                <label for="email"> email </label>
                <input id="email" name="email" type="email" required/>
                
                <label for="password"> password </label>
                <input id="password" name="password" type="text" required/>

                <input type="submit" value="register"/>

            </form>
        </div>
    );
}
*/

//export default RegisterForm;
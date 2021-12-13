import React from 'react';
import '../css/Form.css'
import '../css/Misc.css'

function PostForm(props) {
    return (
        <div>
            <form
                className='card'
                action={`/post`}
                id="post-form" method="POST">
                

                <div className='title'>Write A post.</div>
                <div className='subtitle'>(You have to be logged in)</div>
                
                <input
                    type="hidden"
                    name="authorization"
                    value={/*'Bearer '+*/ localStorage.getItem('auth_token')}
                />
                
                
                <div className='input-container ic1'>
                    <input id="title" name="title" type="text" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="title" className='placeholder'> title </label>
                </div>
                
                <div className='input-container ic2'>
                    <input id="text" name="text" type="text" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="text" className='placeholder'> code </label>
                </div>

                <input type="submit" value="submit" className='submit clickable'/>

            </form>
        </div>
    );
}

export default PostForm;
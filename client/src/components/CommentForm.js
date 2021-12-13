import React from 'react';
import '../css/Form.css'
import '../css/Misc.css'

function CommentForm(props) {
    return (
        <div>
            <form
                className='card center-text'
                action={`/post/${props.id}`}
                id="post-form" method="POST">

                <div className='title'>Write A Comment.</div>
                <div className='subtitle'>(You have to be logged in)</div>
                
                <input
                    type="hidden"
                    name="authorization"
                    value={/*'Bearer '+*/ localStorage.getItem('auth_token')}
                />
                
                <div className='input-container ic1'>
                    <input id="text" name="text" type="text" className='input' placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="text" className='placeholder'> text </label>
                </div>

                <input type="submit" value="submit" className='submit clickable'/>

            </form>
        </div>
    );
}

export default CommentForm;
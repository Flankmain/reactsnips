import React, {useState} from 'react';


function LoginForm() {

  const [alert, setAlert] = useState('');

  function onSubmit(event) {

      event.preventDefault();
      const email = event.target[0].value;
      const password = event.target[1].value;

      fetch("/user/login", {
        headers: {'Content-Type': 'application/json'},
        method: "POST",
        body: JSON.stringify({email:email, password:password})
      })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.token) {
          localStorage.setItem("auth_token", data.token);
          window.location.href="/";
          return;
        }
    
        if (data.message) {
          setAlert(data.message);
          return;
        }
        
        setAlert(`A weird error that shouldn't happen, happened anyway.`);
      });
  }

  return (
      <div className='content'>
          <form
              onSubmit = {onSubmit}
              className='form'
              id="login-form">
              
              <div className='title'>Log in.</div>

              {alert}

              <div className='input-container ic1'>
                  <input id="email" name="email" type="text" className='input' placeholder=" " required/>
                  <div class="cut"></div>
                  <label for="title" className='placeholder'> email or username </label>
              </div>
              
              <div className='input-container ic2'>
                  <input id="password" name="password" type="text" className='input' placeholder=" " required/>
                  <div class="cut"></div>
                  <label for="text" className='placeholder'> password </label>
              </div>

              <input type="submit" value="submit" className='submit'/>

          </form>
      </div>
  );
}

export default LoginForm;
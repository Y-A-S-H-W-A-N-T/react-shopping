import './login.css'
const Login = () => {
    return ( 
        <div class="login">
            <div class="login_change">
                <form action="">
                    <label for="">Username :</label>
                    <input type="text" class="login_name cred" placeholder="username" required/>
                    <label for="">Password :</label>
                    <input type="password" class="login_password cred" placeholder="password" required/>
                    <input type="submit" class="login_submit" value="LOGIN"/>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
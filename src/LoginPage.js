import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div class="form-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <h1 className="loginLog">Login</h1>

                        <div className="loginLog">
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />
                        </div>
                        <div className="loginLog">
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                        </div>
                        <div className="loginLog">
                            <button type="submit" class="btn">Login</button>
                            <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
                        </div>
                    </form>
                </div>
                <div class="form-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <h1 className="loginLog">Register</h1>

                        <div className="loginLog">
                            <label for="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />
                        </div>
                        <div className="loginLog">
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />
                        </div>
                        <div className="loginLog">
                            <h4>Membership</h4>
                            <input className="choice" type="radio" name="gender" value="male" /> Bronze
                            <input className="choice" type="radio" name="gender" value="female" /> Silver
                            <input className="choice" type="radio" name="gender" value="other" /> Gold
                            <input className="choice" type="radio" name="gender" value="other" /> Platinum
                        </div>
                        <div className="loginLog">
                            <button type="submit" class="btn">Register</button>
                            <button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export { Register };
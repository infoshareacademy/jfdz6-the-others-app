import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="rejestracja" style={{float:'left'}}>
            REJESTRACJA
            <form action="#">
              Imię: <input type="text" name="fname" /> <br />
              Nazwisko: <input type="text" name="lname" /> <br />
              E-mail: <input type="text" name="email" /> <br />
              Login: <input type="text" name="login" /> <br />
              Hasło: <input type="text" name="password" /> <br />
              <input type="submit" value="Wyślij" /> <br />
            </form>
          </div>
          <div id="logowanie" style={{float:'left'}}>
          LOGOWANIE
          <form action="#">
              Login: <input type="text" name="login" /> <br />
              Hasło: <input type="text" name="password" /> <br />
              <input type="submit" value="Wyślij" /> <br />
          </form>
          </div>
        </header>

      </div>
    );

  }
}

export default App;

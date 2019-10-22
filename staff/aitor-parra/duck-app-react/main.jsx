function handleGoToLogin() {
    debugger
}

function handleGoToRegister() {
    debugger
}

function handleRegister(name, surname, email, password) {
    debugger
}

// TODO login and search

function handleLogin(email, password) {
    debugger
}

ReactDOM.render(<>
    <Landing onLogin={handleGoToLogin} onRegister={handleGoToRegister} />
    <Register onRegister={handleRegister} />
    <Login onLogin={handleLogin} />

</>, document.getElementById('root'))
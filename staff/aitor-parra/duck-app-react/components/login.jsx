function Login({ onLogin }) {
    return <section className="view login hide">
        <form onSubmit={function (event) {
            event.preventDefault()

            const { name: {value: name}, password: { value: password } } = event.target
            
            onLogin(name, password)
        }}>
            <h1 class="login__title">Login</h1>
            <input class="login__field" type="email" name="email" placeholder="e-mail"/>
            <input class="login__field" type="password" name="password" placeholder="password"/>
            <button class="login__submit">🗝</button>
            <a class="login__back" href="">Go back</a>

        </form>

        <section className="feedback hide">
            <span className="feedback__icon">🤡</span>
            <p className="feedback__message">Come with me...</p>
            <span className="feedback__icon">🎈</span>
        </section>
    </section>
}
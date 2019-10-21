function Login(container) {
    Component.call(this, container);
}

Login.extend(Component);

Search.prototype.onSubmit = function (expression) {
    this.container.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = this.username.value;
        var password = this.psw.value;

        expression(username, password);
    });
};
export default () => {
    const container = document.createElement('div');

    const template = `
        <figure class="img-logo imgFlip">
            <img src="./imagens/logo-mobile.png" alt="logo">
        </figure>

        <form class="form-login bounce">
            <h1 class="title-login">Inicie a sua sessão</h1>
            <section class="inputs">
            <label for="email" class="label">Digite seu e-mail</label>
            <input type="email" placeholder="seuemail@gmail.com" id="email" class="input-email" />
            </section>

            <section class="inputs">
            <label for="password">Digite sua senha</label>
            <input type="password" placeholder="****" id="password" class="input-password" />
            </section>

            <section class="buttons">
            <a href="#Login" class="btn-login">Iniciar Sessão</a>
            <a href="#loginGoogle" class="btn-google"><img class="img-google" src="./imagens/google.svg"/> Entrar com Google</a>
            <a href="#Signup" class="btn-register">Criar nova conta</a>
            </section>
        </form>
    `;

    container.innerHTML = template;

    return container;
}
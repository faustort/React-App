import '../assets/css/global.css'

export default function HomeScreen() {
  return(
    <>
      <div className="container-1">
        <div className="row-1">
          <div className="col-1">
            <h1>Administrador</h1>
            <p>Bem vindo a tela de login</p>
          </div>
          <div className="col-2">
            <div className="col-3">
              <form action="" method="post">
                <div className="form">
                  <div className="form-login">
                    <label for="nome">Insira seu e-mail</label>
                    <input 
                      type="text"
                      placeholder='abc@email.com' 
                      className="form-control" 
                      id="nome" 
                    />
                  </div>
                  <div className="form-login">
                    <label for="senha">Senha</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="senha" 
                    />
                  </div>
                  <div className="form-login">
                    <input 
                      type="submit" 
                      className="btn-success" 
                      value="Entrar" 
                    />
                  </div>
                  <div className="cadusuario">
                    <a href="/cadastro">Cadastre-se</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
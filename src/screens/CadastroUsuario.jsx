import style from '../assets/css/home.css'

export default function CadastroUsuario(){
    return(
        <>
            <div className="container-2">
                <div className="row-2">
                    <div className="col-2">
                        <h1>Cadastro de Usuário</h1>
                        <p>Preencha todos os campos de forma adequada</p>
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                type="text" 
                                placeholder="Nome completo" 
                                className="form-control" 
                                id="nome" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">E-mail</label>
                            <input 
                                type="text" 
                                placeholder="abc@email.com" 
                                className="form-control" 
                                id="email" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Senha</label>
                            <input 
                                type="text" 
                                placeholder="******" 
                                className="form-control" 
                                id="senha" 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btn-success" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
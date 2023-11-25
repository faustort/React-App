export default function AlunoScreen() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Cadastro de Aluno</h1>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome completo</label>
                            <input type="text" className="form-control" id="nome" />
                        </div>
                        <div className="form-group">
                            <label for="Idade">Idade</label>
                            <input type="number" className="form-control" id="Idade" />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label for="telefone">Telefone</label>
                            <input type="text" className="form-control" id="telefone" />
                        </div>
                        <div className="form-group">
                            <label for="curso">Data de nascimento</label>
                            <input type="date" className="form-control" id="date" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn-sucess" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default function DisciplinaScreen(){
    return(
        <>
            <div className="container-2">
                <div className="row-2">
                    <div className="col-2">
                        <h1>Cadastro de Disciplina</h1>
                        <div className="form-group">
                            <label htmlFor="nome">Disciplina</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="disciplina" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Nome da disciplina</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nome-disciplina"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nome">Carga horária</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="carga-horaria" 
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
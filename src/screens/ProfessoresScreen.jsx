export default function ProfessoresScreen() {
  return (
    <>
      <div className="container-2">
        <div className="row-2">
          <div className="col-2">
            <h1>Cadastro de Professores</h1>
            <div className="form-group">
              <label for="nome">Nome completo</label>
              <input 
                type="text" 
                className="form-control" 
                id="nome" 
              />
            </div>
            <div className="form-group">
              <label for="nome">Nome da disciplina</label>
              <input
                type="text"
                className="form-control"
                id="nome-disciplina"
              />
            </div>
            <div className="form-group">
              <label for="nome">Telefone</label>
              <input 
                type="text" 
                className="form-control" 
                id="telefone" 
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
  );
}

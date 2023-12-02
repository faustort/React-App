import { createContext, useContext, useState } from "react";

const AlunoContext = createContext()
export const useAlunos = () => {
    const context = useContext(AlunoContext)
    if(!context){
        throw new Error("useAlunos deve ser usado dentro de um AlunoProvider")
    }
    return context
}
export const AlunoProvider = ({children}) => {
    const [alunos, setAlunos] = useState([])
    const adicionarAluno = (aluno) => {
        setAlunos([...alunos, aluno])
    }
    return(
        <AlunoContext.Provider value={{alunos, adicionarAluno}}>
            {children}
        </AlunoContext.Provider>
    )
}
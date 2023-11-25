import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlunoScreen from "../screens/AlunoScreen";
import DisciplinaScreen from "../screens/DisciplinaScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfessoresScreen from "../screens/ProfessoresScreen";
import { Container } from "react-bootstrap";

export default function RootNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/alunos" element={<AlunoScreen />} />
        <Route path="/disciplina" element={<DisciplinaScreen />} />
        <Route path="/professor" element={<ProfessoresScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

function error() {
  return (
    <Container>
      <h1>Erro 404</h1>
      <p>Ooops! Página não encontrada.</p>
    </Container>
  );
}

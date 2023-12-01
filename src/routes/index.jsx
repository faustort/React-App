import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlunoScreen from "../screens/AlunoScreen";
import DisciplinaScreen from "../screens/DisciplinaScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfessoresScreen from "../screens/ProfessoresScreen";
import CadastroUsuario from "../screens/CadastroUsuario";
import LoginScreen from "../screens/LoginScreen";
import { Container } from "react-bootstrap";

export default function RootNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route path="/alunos" element={<AlunoScreen />} />
        <Route path="/disciplina" element={<DisciplinaScreen />} />
        <Route path="/professor" element={<ProfessoresScreen />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <Container>
      <h1>Erro 404</h1>
      <p>Ooops! Página não encontrada.</p>
    </Container>
  );
}

import { Router } from 'express';
import AlunoController from '../controllers/alunoController'; // Caminho relativo correto para o Controller

const router: Router = Router();

router.get('/', AlunoController.listarAlunos);
router.post('/', AlunoController.criarAluno);
router.get('/:id', AlunoController.recuperarAluno);
router.put('/:id', AlunoController.editarAluno);
router.delete('/:id', AlunoController.apagarAluno);

export default router;

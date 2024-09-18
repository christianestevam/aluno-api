import { Request, Response } from 'express';
import AlunoService from '../services/alunoService';

class AlunoController {
  // Listar todos os alunos
  async listarAlunos(req: Request, res: Response): Promise<void> {
    try {
      const alunos = await AlunoService.listarAlunos();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar alunos', error });
    }
  }

  // Criar um novo aluno
  async criarAluno(req: Request, res: Response): Promise<void> {
    try {
      const { nome, curso, ira } = req.body;
      const novoAluno = await AlunoService.criarAluno({ nome, curso, ira });
      res.status(201).json(novoAluno);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar aluno', error });
    }
  }

  // Recuperar um aluno pelo ID
  async recuperarAluno(req: Request, res: Response): Promise<void> {
    try {
      const aluno = await AlunoService.recuperarAluno(req.params.id);
      if (!aluno) {
        res.status(404).json({ message: 'Aluno não encontrado' });
        return;
      }
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao recuperar aluno', error });
    }
  }

  // Editar um aluno pelo ID
  async editarAluno(req: Request, res: Response): Promise<void> {
    try {
      const aluno = await AlunoService.editarAluno(req.params.id, req.body);
      if (!aluno) {
        res.status(404).json({ message: 'Aluno não encontrado' });
        return;
      }
      res.status(200).json(aluno);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao editar aluno', error });
    }
  }

  // Apagar um aluno pelo ID
  async apagarAluno(req: Request, res: Response): Promise<void> {
    try {
      const aluno = await AlunoService.apagarAluno(req.params.id);
      if (!aluno) {
        res.status(404).json({ message: 'Aluno não encontrado' });
        return;
      }
      res.status(204).json({ message: 'Aluno apagado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao apagar aluno', error });
    }
  }
}

export default new AlunoController();

import Aluno, { IAluno } from '../models/Aluno';

class AlunoService {
  async listarAlunos(): Promise<IAluno[]> {
    return await Aluno.find();
  }

  async criarAluno(data: { nome: string; curso: string; ira: number }): Promise<IAluno> {
    const novoAluno = new Aluno(data);
    return await novoAluno.save();
  }

  async recuperarAluno(id: string): Promise<IAluno | null> {
    return await Aluno.findById(id);
  }

  async editarAluno(id: string, data: Partial<IAluno>): Promise<IAluno | null> {
    return await Aluno.findByIdAndUpdate(id, data, { new: true });
  }

  async apagarAluno(id: string): Promise<IAluno | null> {
    return await Aluno.findByIdAndDelete(id);
  }
}

export default new AlunoService();

import mongoose, { Schema, Document } from 'mongoose';

export interface IAluno extends Document {
  nome: string;
  curso: string;
  ira: number;
}

const AlunoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  curso: { type: String, required: true },
  ira: { type: Number, required: true }
});

export default mongoose.model<IAluno>('Aluno', AlunoSchema);

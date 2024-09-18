import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import alunoRoutes from './routes/alunoRoutes'; // Corrigido para caminho relativo

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Conectar ao MongoDB sem os parâmetros desnecessários
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/alunos', alunoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    cpfOuCelular: string;
    senha?: string; // Opcional, depende do uso
    isAdmin: boolean;
  }
  
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Obrigado!</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        A sua mensagem foi enviada com sucesso. Entraremos em contacto consigo nas próximas 24 horas.
      </p>
      <Link 
        to="/" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Voltar à Página Principal
      </Link>
    </div>
  );
};

export default ThankYou;
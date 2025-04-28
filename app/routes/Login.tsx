import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('Intentando iniciar sesión con:', email, password);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-purple-400 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <div className="flex items-center justify-start mb-6">
          <div className="bg-blue-600 text-white rounded-xl p-4">
            <h2 className="font-bold text-xl">J&P</h2>
            <p className="text-xs">PERIFÉRICOS S.A.C</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Registrar</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Iniciar sección
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <button className="hover:underline">Crear Cuenta</button>
          <button className="hover:underline">Olvidé mi contraseña?</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
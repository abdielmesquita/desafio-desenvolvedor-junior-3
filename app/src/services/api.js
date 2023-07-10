// const BASE_URL = 'http://localhost:3001';

// TODO: temporário apenas para permitir testar em desktops e mobiles
const BASE_URL = `http://${window.location.hostname}:3001`;

export const fetchData = async (method, route, data) => {
  const url = `${BASE_URL}${route}`;
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error || 'Falha na requisição');
    }

    const jsonData = await response.json(); // Converter a resposta em JSON

    return jsonData;
  } catch (error) {
    throw new Error(error.message || 'Requisição falhou');
  }
};

export const login = async (email, password) => {
  const route = '/login';
  const data = { email, password };
  const method = 'POST';

  try {
    const response = await fetchData(method, route, data);
    const { token, user } = response;

    localStorage.setItem('token', token);

    return { token, user };
  } catch (error) {
    throw new Error(error.message || 'Login falhou');
  }
};

export const register = async (name, email, password) => {
  const route = '/register';
  const data = { name, email, password };
  const method = 'POST';

  try {
    const response = await fetchData(method, route, data);
    // Lógica adicional após o registro ser realizado com sucesso
    return response;
  } catch (error) {
    throw new Error(error.message || 'Inscrição falhou');
  }
};

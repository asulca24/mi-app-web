import React, { useState, useEffect } from 'react';

// Datos de equipos proporcionados por el usuario (desde response.json)
const initialEquipmentData = [
  { "nombre": "Laptop Lenovo ThinkPad", "tipo": "Portátil", "sede": "Sede Lima", "sku": "EQP001" },
  { "nombre": "Laptop Lenovo ThinkPad", "tipo": "Portátil", "sede": "Sede Arequipa", "sku": "EQP002" },
  { "nombre": "Laptop Dell Inspiron", "tipo": "Portátil", "sede": "Sede Trujillo", "sku": "EQP003" },
  { "nombre": "Monitor Samsung 24\"", "tipo": "Monitor", "sede": "Sede Lima", "sku": "EQP004" },
  { "nombre": "Monitor Samsung 24\"", "tipo": "Monitor", "sede": "Sede Cusco", "sku": "EQP005" },
  { "nombre": "CPU HP ProDesk 400", "tipo": "PC Escritorio", "sede": "Sede Lima", "sku": "EQP006" },
  { "nombre": "CPU HP ProDesk 400", "tipo": "PC Escritorio", "sede": "Sede Piura", "sku": "EQP007" },
  { "nombre": "Impresora HP LaserJet", "tipo": "Impresora", "sede": "Sede Lima", "sku": "EQP008" },
  { "nombre": "Impresora HP LaserJet", "tipo": "Impresora", "sede": "Sede Chiclayo", "sku": "EQP010" },
  { "nombre": "Router TP-Link Archer", "tipo": "Red", "sede": "Sede Lima", "sku": "EQP010" }
];

// URL base de la API (¡REEMPLAZA ESTO CON LA URL DE TU API DE BACKEND REAL Y DESPLEGADA!)
const API_BASE_URL = 'https://your-backend-api.com/api';

// Componente principal de la aplicación
const App = () => {
  // Estado para gestionar la vista actual (ej. 'dashboard', 'users', 'equipment', 'login')
  const [currentView, setCurrentView] = useState('login');
  // Estado para simular la autenticación del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Estado para los datos de usuarios
  const [users, setUsers] = useState([]);
  // Estado para los datos de equipos
  const [equipment, setEquipment] = useState([]);
  // Estado para la visibilidad del modal de usuarios
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  // Estado para el usuario actual siendo editado/visto
  const [currentUser, setCurrentUser] = useState(null);
  // Estado para el tipo de modal de usuario ('view', 'edit', 'add')
  const [userModalType, setUserModalType] = useState('');
  // Estado para la visibilidad del modal de equipos
  const [isEquipmentModalOpen, setIsEquipmentModalOpen] = useState(false);
  // Estado para el equipo actual siendo editado/visto
  const [currentEquipment, setCurrentEquipment] = useState(null);
  // Estado para el tipo de modal de equipo ('view', 'edit', 'add')
  const [equipmentModalType, setEquipmentModalType] = useState('');

  // Estados para retroalimentación de llamadas a la API
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Token de autenticación simulado (en una aplicación real se obtendría del login y se almacenaría de forma segura)
  const [authToken, setAuthToken] = useState('simulated_jwt_token_123');

  // Función para mostrar mensajes de error/éxito
  const showMessage = (message, type = 'info') => {
    const messageBox = document.createElement('div');
    messageBox.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 ${
      type === 'error' ? 'bg-red-500' : 'bg-green-500'
    }`;
    messageBox.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(messageBox);
    setTimeout(() => {
      document.body.removeChild(messageBox);
    }, 3000);
  };

  // Simular la obtención de datos iniciales al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- INICIO DE LLAMADAS A LA API REAL (DESCOMENTAR Y ADAPTAR) ---

        // Ejemplo para obtener usuarios:
        // const userResponse = await fetch(`${API_BASE_URL}/users`, {
        //   headers: { 'Authorization': `Bearer ${authToken}` }
        // });
        // if (!userResponse.ok) throw new Error(`HTTP error! status: ${userResponse.status}`);
        // const userData = await userResponse.json();
        // setUsers(userData);
        // showMessage('Datos de usuarios cargados.', 'success');

        // Ejemplo para obtener equipos:
        // const equipResponse = await fetch(`${API_BASE_URL}/equipment`, {
        //   headers: { 'Authorization': `Bearer ${authToken}` }
        // });
        // if (!equipResponse.ok) throw new Error(`HTTP error! status: ${equipResponse.status}`);
        // const equipData = await equipResponse.json();
        // setEquipment(equipData.map(item => ({ ...item, id: item.id || item.sku })));
        // showMessage('Datos de equipos cargados.', 'success');

        // --- FIN DE LLAMADAS A LA API REAL ---

        // Simulación de carga de datos iniciales (eliminar cuando uses la API real)
        await new Promise(resolve => setTimeout(resolve, 500));
        setUsers([
          { id: 'user-001', name: 'Juan Pérez', email: 'juan.perez@example.com', role: 'Administrador' },
          { id: 'user-002', name: 'María García', email: 'maria.garcia@example.com', role: 'Editor' },
          { id: 'user-003', name: 'Carlos Sánchez', email: 'carlos.sanchez@example.com', role: 'Usuario' },
        ]);
        showMessage('Datos de usuarios cargados (simulados).', 'success');

        await new Promise(resolve => setTimeout(resolve, 500));
        setEquipment(initialEquipmentData.map((item, index) => ({ ...item, id: `equip-${index}` })));
        showMessage('Datos de equipos cargados (simulados).', 'success');

      } catch (err) {
        setError('Error al cargar datos iniciales: ' + err.message);
        showMessage('Error al cargar datos iniciales.', 'error');
        console.error('Error fetching initial data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, authToken]);

  // Función para manejar el inicio de sesión (simulado con llamada a API)
  const handleLogin = async (username, password) => {
    setIsLoading(true);
    setError(null);
    try {
      // --- INICIO DE LLAMADA A LA API REAL (DESCOMENTAR Y ADAPTAR) ---
      // const response = await fetch(`${API_BASE_URL}/login`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ username, password })
      // });
      // if (!response.ok) throw new Error('Credenciales incorrectas');
      // const data = await response.json();
      // setAuthToken(data.token); // Almacena el token recibido
      // setIsAuthenticated(true);
      // setCurrentView('dashboard');
      // showMessage('Inicio de sesión exitoso.', 'success');
      // --- FIN DE LLAMADA A LA API REAL ---

      // Simulación de login (eliminar cuando uses la API real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (username === 'admin' && password === 'admin') {
        setIsAuthenticated(true);
        setCurrentView('dashboard');
        showMessage('Inicio de sesión exitoso (simulado).', 'success');
      } else {
        throw new Error('Credenciales incorrectas.');
      }
    } catch (err) {
      setError(err.message);
      showMessage(err.message, 'error');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthToken(null); // Limpiar token al cerrar sesión
    setCurrentView('login');
    showMessage('Sesión cerrada.', 'info');
  };

  // Funciones de gestión de usuarios (con llamadas a API simuladas)
  const openUserModal = (user, type) => {
    setCurrentUser(user);
    setUserModalType(type);
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
    setCurrentUser(null);
    setUserModalType('');
  };

  const handleSaveUser = async (user) => {
    setIsLoading(true);
    setError(null);
    try {
      // --- INICIO DE LLAMADAS A LA API REAL (DESCOMENTAR Y ADAPTAR) ---
      // let response;
      // if (user.id && !user.id.startsWith('user-')) { // Si tiene un ID real (no simulado)
      //   response = await fetch(`${API_BASE_URL}/users/${user.id}`, {
      //     method: 'PUT',
      //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      //     body: JSON.stringify(user)
      //   });
      // } else {
      //   response = await fetch(`${API_BASE_URL}/users`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      //     body: JSON.stringify(user)
      //   });
      // }
      // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      // const savedUser = await response.json();
      // setUsers(users.map(u => (u.id === savedUser.id ? savedUser : u)));
      // showMessage('Usuario guardado exitosamente.', 'success');
      // --- FIN DE LLAMADAS A LA API REAL ---

      // Simulación de guardado de usuario (eliminar cuando uses la API real)
      await new Promise(resolve => setTimeout(resolve, 500));
      if (user.id) {
        setUsers(users.map(u => (u.id === user.id ? user : u)));
        showMessage('Usuario actualizado exitosamente (simulado).', 'success');
      } else {
        const newUser = { ...user, id: `user-${Date.now()}` };
        setUsers([...users, newUser]);
        showMessage('Usuario añadido exitosamente (simulado).', 'success');
      }
      closeUserModal();
    } catch (err) {
      setError('Error al guardar usuario: ' + err.message);
      showMessage('Error al guardar usuario.', 'error');
      console.error('Save user error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = (userId) => {
    const confirmModal = document.createElement('div');
    confirmModal.className = "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50";
    confirmModal.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-xl text-center">
        <p class="text-lg font-semibold mb-4">¿Estás seguro de que quieres eliminar este usuario?</p>
        <button id="confirmDelete" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">Sí, Eliminar</button>
        <button id="cancelDelete" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">Cancelar</button>
      </div>
    `;
    document.body.appendChild(confirmModal);

    document.getElementById('confirmDelete').onclick = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- INICIO DE LLAMADA A LA API REAL (DESCOMENTAR Y ADAPTAR) ---
        // await fetch(`${API_BASE_URL}/users/${userId}`, {
        //   method: 'DELETE',
        //   headers: { 'Authorization': `Bearer ${authToken}` }
        // });
        // --- FIN DE LLAMADA A LA API REAL ---

        // Simulación de eliminación de usuario (eliminar cuando uses la API real)
        await new Promise(resolve => setTimeout(resolve, 500));
        setUsers(users.filter(user => user.id !== userId));
        showMessage('Usuario eliminado exitosamente (simulado).', 'success');
        closeUserModal();
      } catch (err) {
        setError('Error al eliminar usuario: ' + err.message);
        showMessage('Error al eliminar usuario.', 'error');
        console.error('Delete user error:', err);
      } finally {
        setIsLoading(false);
        document.body.removeChild(confirmModal);
      }
    };
    document.getElementById('cancelDelete').onclick = () => {
      document.body.removeChild(confirmModal);
    };
  };

  // Funciones de gestión de equipos (con llamadas a API simuladas)
  const openEquipmentModal = (item, type) => {
    setCurrentEquipment(item);
    setEquipmentModalType(type);
    setIsEquipmentModalOpen(true);
  };

  const closeEquipmentModal = () => {
    setIsEquipmentModalOpen(false);
    setCurrentEquipment(null);
    setEquipmentModalType('');
  };

  const handleSaveEquipment = async (item) => {
    setIsLoading(true);
    setError(null);
    try {
      // --- INICIO DE LLAMADAS A LA API REAL (DESCOMENTAR Y ADAPTAR) ---
      // let response;
      // if (item.id && !item.id.startsWith('equip-')) { // Si tiene un ID real (no simulado)
      //   response = await fetch(`${API_BASE_URL}/equipment/${item.id}`, {
      //     method: 'PUT',
      //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      //     body: JSON.stringify(item)
      //   });
      // } else {
      //   response = await fetch(`${API_BASE_URL}/equipment`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
      //     body: JSON.stringify(item)
      //   });
      // }
      // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      // const savedItem = await response.json();
      // setEquipment(equipment.map(e => (e.id === savedItem.id ? savedItem : e)));
      // showMessage('Equipo guardado exitosamente.', 'success');
      // --- FIN DE LLAMADAS A LA API REAL ---

      // Simulación de guardado de equipo (eliminar cuando uses la API real)
      await new Promise(resolve => setTimeout(resolve, 500));
      if (item.id) {
        setEquipment(equipment.map(e => (e.id === item.id ? item : e)));
        showMessage('Equipo actualizado exitosamente (simulado).', 'success');
      } else {
        const newItem = { ...item, id: `equip-${Date.now()}` };
        setEquipment([...equipment, newItem]);
        showMessage('Equipo añadido exitosamente (simulado).', 'success');
      }
      closeEquipmentModal();
    } catch (err) {
      setError('Error al guardar equipo: ' + err.message);
      showMessage('Error al guardar equipo.', 'error');
      console.error('Save equipment error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteEquipment = (equipmentId) => {
    const confirmModal = document.createElement('div');
    confirmModal.className = "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50";
    confirmModal.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-xl text-center">
        <p class="text-lg font-semibold mb-4">¿Estás seguro de que quieres eliminar este equipo?</p>
        <button id="confirmDelete" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mr-2">Sí, Eliminar</button>
        <button id="cancelDelete" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">Cancelar</button>
      </div>
    `;
    document.body.appendChild(confirmModal);

    document.getElementById('confirmDelete').onclick = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // --- INICIO DE LLAMADA A LA API REAL (DESCOMENTAR Y ADAPTAR) ---
        // await fetch(`${API_BASE_URL}/equipment/${equipmentId}`, {
        //   method: 'DELETE',
        //   headers: { 'Authorization': `Bearer ${authToken}` }
        // });
        // --- FIN DE LLAMADA A LA API REAL ---

        // Simulación de eliminación de equipo (eliminar cuando uses la API real)
        await new Promise(resolve => setTimeout(resolve, 500));
        setEquipment(equipment.filter(item => item.id !== equipmentId));
        showMessage('Equipo eliminado exitosamente (simulado).', 'success');
        closeEquipmentModal();
      } catch (err) {
        setError('Error al eliminar equipo: ' + err.message);
        showMessage('Error al eliminar equipo.', 'error');
        console.error('Delete equipment error:', err);
      } finally {
        setIsLoading(false);
        document.body.removeChild(confirmModal);
      }
    };
    document.getElementById('cancelDelete').onclick = () => {
      document.body.removeChild(confirmModal);
    };
  };

  // Componente de spinner de carga
  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[100]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    </div>
  );


  // Componentes para las diferentes vistas
  const Dashboard = () => (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Panel de Control</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Total de Usuarios</h3>
          <p className="text-5xl font-bold text-indigo-600">{users.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Total de Equipos</h3>
          <p className="text-5xl font-bold text-teal-600">{equipment.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Ventas del Mes</h3>
          <p className="text-5xl font-bold text-green-600">$12,345</p>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Actividad Reciente</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Pedido #12345 creado por María G.</li>
          <li>Nuevo usuario registrado: Pedro L.</li>
          <li>Actualización de producto: Camisa de Algodón.</li>
          <li>Equipo EQP001 asignado a Sede Lima.</li>
        </ul>
      </div>
    </div>
  );

  const UserManagement = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Usuarios</h2>
        <button
          onClick={() => openUserModal({ name: '', email: '', role: 'Usuario' }, 'add')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Añadir Usuario
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Acciones</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => openUserModal(user, 'view')}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    title="Ver"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={() => openUserModal(user, 'edit')}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    title="Editar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.586 3.586L1.586 15H5v3.414l8.414-8.414-3.414-3.414z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Eliminar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm6 3a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const DataMasters = () => (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Gestión de Datos Maestros</h2>
      <p className="text-gray-600">Esta sección es un marcador de posición para la gestión de productos, categorías, etc. La gestión de "Equipos" se encuentra ahora en su propia sección dedicada.</p>
      {/* Marcador de posición para la gestión de productos/categorías */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Productos</h3>
        <p className="text-gray-500">Listado de productos...</p>
        {/* Ejemplo: un botón simple para añadir un producto */}
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Añadir Producto
        </button>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Categorías</h3>
        <p className="text-gray-500">Listado de categorías...</p>
        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Añadir Categoría
        </button>
      </div>
    </div>
  );

  const EquipmentManagement = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Equipos</h2>
        <button
          onClick={() => openEquipmentModal({ nombre: '', tipo: '', sede: '', sku: '' }, 'add')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Añadir Equipo
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sede</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Acciones</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {equipment.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.tipo}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sede}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sku}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => openEquipmentModal(item, 'view')}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                    title="Ver"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button
                    onClick={() => openEquipmentModal(item, 'edit')}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    title="Editar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.586 3.586L1.586 15H5v3.414l8.414-8.414-3.414-3.414z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteEquipment(item.id)}
                    className="text-red-600 hover:text-red-900"
                    title="Eliminar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm6 3a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


  const OrdersManagement = () => (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Gestión de Pedidos/Transacciones</h2>
      <p className="text-gray-600">Aquí se visualizarían y gestionarían los pedidos realizados desde la aplicación móvil.</p>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Pedidos Recientes</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Pedido #12345 - Pendiente</li>
          <li>Pedido #12344 - Completado</li>
          <li>Pedido #12343 - En Proceso</li>
        </ul>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Ver Todos los Pedidos
        </button>
      </div>
    </div>
  );

  const ReportsAndStats = () => (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Informes y Estadísticas</h2>
      <p className="text-gray-600">Dashboards con métricas relevantes (ej., ventas, usuarios activos).</p>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Gráfico de Ventas Mensuales</h3>
        <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-500">
          [Gráfico de barras simulado]
        </div>
      </div>
      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Usuarios Activos por Día</h3>
        <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center text-gray-500">
          [Gráfico de líneas simulado]
        </div>
      </div>
    </div>
  );

  // Componente del formulario de inicio de sesión
  const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      handleLogin(username, password);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Usuario:</label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña:</label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Componente de modal de usuario (Ver/Editar/Añadir)
  const UserModal = ({ isOpen, onClose, user, type, onSave, onDelete }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
      if (user) {
        setName(user.name);
        setEmail(user.email);
        setRole(user.role);
      }
    }, [user]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({ ...user, name, email, role });
    };

    if (!isOpen) return null;

    const isView = type === 'view';
    const isEdit = type === 'edit';
    const isAdd = type === 'add';

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isView ? 'Detalles del Usuario' : isEdit ? 'Editar Usuario' : 'Añadir Nuevo Usuario'}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="modal-name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
              <input
                type="text"
                id="modal-name"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={isView}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="modal-email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                type="email"
                id="modal-email"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={isView}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="modal-role" className="block text-gray-700 text-sm font-bold mb-2">Rol:</label>
              <select
                id="modal-role"
                className="shadow border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={isView}
              >
                <option value="Administrador">Administrador</option>
                <option value="Editor">Editor</option>
                <option value="Usuario">Usuario</option>
              </select>
            </div>

            <div className="flex justify-end gap-4">
              {isView && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openUserModal(user, 'edit'); // Reabre en modo edición
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Editar
                </button>
              )}
              {(isEdit || isAdd) && (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Guardar Cambios
                </button>
              )}
              {isEdit && (
                <button
                  type="button"
                  onClick={() => onDelete(user.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Eliminar
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Componente de modal de equipo (Ver/Editar/Añadir)
  const EquipmentModal = ({ isOpen, onClose, equipmentItem, type, onSave, onDelete }) => {
    const [nombre, setNombre] = useState('');
    const [tipo, setTipo] = useState('');
    const [sede, setSede] = useState('');
    const [sku, setSku] = useState('');

    useEffect(() => {
      if (equipmentItem) {
        setNombre(equipmentItem.nombre);
        setTipo(equipmentItem.tipo);
        setSede(equipmentItem.sede);
        setSku(equipmentItem.sku);
      }
    }, [equipmentItem]);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave({ ...equipmentItem, nombre, tipo, sede, sku });
    };

    if (!isOpen) return null;

    const isView = type === 'view';
    const isEdit = type === 'edit';
    const isAdd = type === 'add';

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-lg w-full mx-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {isView ? 'Detalles del Equipo' : isEdit ? 'Editar Equipo' : 'Añadir Nuevo Equipo'}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="equip-modal-nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
              <input
                type="text"
                id="equip-modal-nombre"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                readOnly={isView}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="equip-modal-tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
              <input
                type="text"
                id="equip-modal-tipo"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                readOnly={isView}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="equip-modal-sede" className="block text-gray-700 text-sm font-bold mb-2">Sede:</label>
              <input
                type="text"
                id="equip-modal-sede"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
                readOnly={isView}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="equip-modal-sku" className="block text-gray-700 text-sm font-bold mb-2">SKU:</label>
              <input
                type="text"
                id="equip-modal-sku"
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                readOnly={isView}
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              {isView && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openEquipmentModal(equipmentItem, 'edit'); // Reabre en modo edición
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Editar
                </button>
              )}
              {(isEdit || isAdd) && (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Guardar Cambios
                </button>
              )}
              {isEdit && (
                <button
                  type="button"
                  onClick={() => onDelete(equipmentItem.id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Eliminar
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };


  // Diseño principal de la aplicación
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* El CSS de Tailwind se carga via CDN en public/index.html */}

      {/* Spinner de carga */}
      {isLoading && <LoadingSpinner />}

      {isAuthenticated ? (
        <div className="flex flex-col md:flex-row">
          {/* Barra lateral de navegación */}
          <nav className="bg-indigo-800 text-white w-full md:w-64 flex-shrink-0 p-4 rounded-br-lg md:rounded-tr-none md:rounded-bl-lg shadow-lg">
            <div className="text-2xl font-bold mb-8 text-center">Admin Panel</div>
            <ul>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'dashboard' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Dashboard
                </button>
              </li>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('users')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'users' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Usuarios
                </button>
              </li>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('equipment')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'equipment' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zm4 3a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1zM6 5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1zm-1 9a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm4 3a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zm4-3a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                  Equipos
                </button>
              </li>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('data-masters')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'data-masters' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8.4l-2.934 3.411A5.002 5.002 0 0011.693 11H13a2 2 0 110 4H7.879l-2.658 2.658A1 1 0 013 17V6z" clipRule="evenodd" />
                  </svg>
                  Datos Maestros
                </button>
              </li>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('orders')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'orders' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Pedidos
                </button>
              </li>
              <li className="mb-3">
                <button
                  onClick={() => setCurrentView('reports')}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition duration-200 ${
                    currentView === 'reports' ? 'bg-indigo-600 shadow-md' : 'hover:bg-indigo-700'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm11.5 1h-2.12a.5.5 0 00-.472.287l-.896 1.792A.5.5 0 0111 7h-2a.5.5 0 01-.472-.287l-.896-1.792A.5.5 0 007.62 5H5.5A1.5 1.5 0 004 6.5v7A1.5 1.5 0 005.5 15h9A1.5 1.5 0 0016 13.5v-7A1.5 1.5 0 0014.5 5zm-3.5 6a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" />
                  </svg>
                  Informes
                </button>
              </li>
              <li className="mt-8">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left py-3 px-4 rounded-lg transition duration-200 bg-red-600 hover:bg-red-700 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </nav>

          {/* Área de contenido principal */}
          <main className="flex-grow p-4 md:p-6 bg-gray-100 rounded-tl-lg md:rounded-bl-none md:rounded-tr-lg shadow-lg">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'users' && <UserManagement />}
            {currentView === 'equipment' && <EquipmentManagement />}
            {currentView === 'data-masters' && <DataMasters />}
            {currentView === 'orders' && <OrdersManagement />}
            {currentView === 'reports' && <ReportsAndStats />}
          </main>

          {/* Modal de Usuario */}
          <UserModal
            isOpen={isUserModalOpen}
            onClose={closeUserModal}
            user={currentUser}
            type={userModalType}
            onSave={handleSaveUser}
            onDelete={handleDeleteUser}
          />

          {/* Modal de Equipo */}
          <EquipmentModal
            isOpen={isEquipmentModalOpen}
            onClose={closeEquipmentModal}
            equipmentItem={currentEquipment}
            type={equipmentModalType}
            onSave={handleSaveEquipment}
            onDelete={handleDeleteEquipment}
          />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default App;
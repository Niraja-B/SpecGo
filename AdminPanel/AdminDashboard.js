import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaEdit, FaTrashAlt, FaLock, FaUsers, FaBox, FaShoppingCart, FaMoneyBillAlt, FaHome } from 'react-icons/fa';
import '../styles/AdminDashboard.css'; // Import the CSS for styling

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([
    { id: '01', name: 'Niraja', email: 'Niraja@gmail.com', password: '123456' },
    { id: '02', name: 'Bharathi', email: 'Bharathi@gmail.com', password: '423536' },
    { id: '03', name: 'Dharshini', email: 'Dharshini@gmail.com', password: 'efdhdrt' },
    { id: '04', name: 'Rinii', email: 'Rinii@gmail.com', password: 'dgeth' },
    { id: '05', name: 'Dhanu', email: 'Dhanu@gmail.com', password: 'dfheafag' },
    { id: '06', name: 'Varshini', email: 'Varshini@gmail.com', password: 'nhdtj' },
    { id: '07', name: 'Joe', email: 'Joe@gmail.com', password: 'ggdhs' },
    { id: '08', name: 'Akshay', email: 'akshay@gmail.com', password: 'fdngbdz' },
    { id: '09', name: 'Kamal', email: 'kamal@gmail.com', password: 'jmhhgbgg' },
    { id: '10', name: 'rudhran', email: 'rudhran@gmail.com', password: 'jmhhgbgg' },
  ]);

  const [editUserId, setEditUserId] = useState(null); // Track user being edited by ID
  const [flashMessage, setFlashMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/');
  };

  const handleEditClick = (userId) => {
    setEditUserId(userId);
  };

  const handleEditChange = (e, userId) => {
    const { name, value } = e.target;
    setUsers(users.map(user => user.id === userId ? { ...user, [name]: value } : user));
  };

  const handleEditSave = (userId) => {
    setEditUserId(null);
    setFlashMessage('User updated successfully!');
    setTimeout(() => setFlashMessage(''), 3000); // Clear message after 3 seconds
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
    setFlashMessage('User deleted successfully!');
    setTimeout(() => setFlashMessage(''), 3000); // Clear message after 3 seconds
  };

  const handleBlockUser = (userId) => {
    setFlashMessage('User blocked successfully!');
    setTimeout(() => setFlashMessage(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <div className="admin-navbar-left">
          <div className="admin-logo">SpecGo</div>
        </div>
        <div className="admin-navbar-right">
          <FaHome className="admin-icon" onClick={() => navigate('/')} />
          <FaUser className="admin-icon" />
          <div className="admin-dropdown">
            <FaSignOutAlt onClick={handleLogout} />
            <span onClick={handleLogout}>Logout</span>
          </div>
        </div>
      </nav>

      <div className="admin-main">
        <div className="admin-sidebar">
          <button
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Admin Dashboard
          </button>
          <button
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
        </div>

        <div className="admin-content">
          {flashMessage && <div className="flash-message">{flashMessage}</div>}
          {activeTab === 'dashboard' && (
            <div className="dashboard-stats">
              <div className="dashboard-box">
                <FaUsers className="dashboard-icon" />
                <div className="dashboard-title">Total Users</div>
                <div className="dashboard-value">3</div>
              </div>
              <div className="dashboard-box">
                <FaUser className="dashboard-icon" />
                <div className="dashboard-title">Active Users</div>
                <div className="dashboard-value">3</div>
              </div>
              <div className="dashboard-box">
                <FaBox className="dashboard-icon" />
                <div className="dashboard-title">Total Products</div>
                <div className="dashboard-value">150</div>
              </div>
              <div className="dashboard-box">
                <FaShoppingCart className="dashboard-icon" />
                <div className="dashboard-title">Total Orders</div>
                <div className="dashboard-value">0</div>
              </div>
              <div className="dashboard-box">
                <FaMoneyBillAlt className="dashboard-icon" />
                <div className="dashboard-title">Total Revenue</div>
                <div className="dashboard-value">₹0</div>
              </div>
            </div>
          )}
          {activeTab === 'users' && (
            <div className="users-list">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      {editUserId === user.id ? (
                        <>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={user.name}
                              onChange={(e) => handleEditChange(e, user.id)}
                            />
                          </td>
                          <td>
                            <input
                              type="email"
                              name="email"
                              value={user.email}
                              onChange={(e) => handleEditChange(e, user.id)}
                            />
                          </td>
                          <td>
                            <input
                              type="password"
                              name="password"
                              value={user.password}
                              onChange={(e) => handleEditChange(e, user.id)}
                            />
                          </td>
                          <td>
                            <button className="save-button" onClick={() => handleEditSave(user.id)}>
                              Save
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.password}</td>
                          <td>
                            <button className="edit-button" onClick={() => handleEditClick(user.id)}>
                              <FaEdit />
                            </button>
                            <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>
                              <FaTrashAlt />
                            </button>
                            <button className="block-button" onClick={() => handleBlockUser(user.id)}>
                              <FaLock />
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

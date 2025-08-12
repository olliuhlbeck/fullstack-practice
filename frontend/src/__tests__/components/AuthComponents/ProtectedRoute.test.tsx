import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../../components/AuthComponents/ProtectedRoute';
import * as useAuthModule from '../../../utils/useAuth'; // mock useAuth

// Protected route
describe('ProtectedRoute', () => {
  // Mock children to render inside ProtectedRoute
  const Child = () => <div>Protected Content</div>;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders children when authenticated', () => {
    jest.spyOn(useAuthModule, 'useAuth').mockReturnValue({
      isAuthenticated: true,
      user: 'testuser',
      userId: 1,
      login: jest.fn(),
      logout: jest.fn(),
      token: 'sometoken',
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path='/protected'
            element={
              <ProtectedRoute>
                <Child />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(getByText('Protected Content')).toBeInTheDocument();
  });

  it('redirects to /login when not authenticated', () => {
    jest.spyOn(useAuthModule, 'useAuth').mockReturnValue({
      isAuthenticated: false,
      user: null,
      userId: null,
      login: jest.fn(),
      logout: jest.fn(),
      token: null,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <Routes>
          <Route
            path='/protected'
            element={
              <ProtectedRoute>
                <Child />
              </ProtectedRoute>
            }
          />
          <Route path='/login' element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    // Working protected route should redirect to login page
    expect(container.textContent).toBe('Login Page');
  });
});

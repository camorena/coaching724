import { useAuth } from './auth';

export type UserRole = 'admin' | 'coach' | 'client' | 'guest';

export type Permission =
  // Admin permissions
  | 'manage_users'
  | 'manage_coaches'
  | 'manage_system'
  | 'view_analytics'
  | 'manage_payments'
  
  // Coach permissions
  | 'manage_profile'
  | 'manage_availability'
  | 'manage_services'
  | 'view_clients'
  | 'manage_sessions'
  
  // Client permissions
  | 'book_sessions'
  | 'manage_appointments'
  | 'view_coaches'
  | 'access_resources'
  
  // Common permissions
  | 'update_profile'
  | 'view_dashboard';

// Role-based permissions map
const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    'manage_users',
    'manage_coaches',
    'manage_system',
    'view_analytics',
    'manage_payments',
    'update_profile',
    'view_dashboard',
  ],
  coach: [
    'manage_profile',
    'manage_availability',
    'manage_services',
    'view_clients',
    'manage_sessions',
    'update_profile',
    'view_dashboard',
  ],
  client: [
    'book_sessions',
    'manage_appointments',
    'view_coaches',
    'access_resources',
    'update_profile',
    'view_dashboard',
  ],
  guest: [
    'view_coaches',
  ],
};

export const usePermissions = () => {
  const { user } = useAuth();
  
  // Determine user role from user metadata or claims
  // This is an example and should be adapted to your actual user data structure
  const getUserRole = (): UserRole => {
    if (!user) return 'guest';
    
    const role = user.user_metadata?.role as UserRole;
    
    if (role && Object.keys(rolePermissions).includes(role)) {
      return role;
    }
    
    // Default to client if role not found
    return 'client';
  };
  
  const role = getUserRole();
  
  const hasPermission = (permission: Permission): boolean => {
    if (role === 'admin') return true; // Admin has all permissions
    return rolePermissions[role].includes(permission);
  };
  
  const checkPermissions = (permissions: Permission[]): boolean => {
    if (role === 'admin') return true; // Admin has all permissions
    return permissions.every(permission => rolePermissions[role].includes(permission));
  };
  
  const userCan = (action: string): boolean => {
    return hasPermission(action as Permission);
  };
  
  return {
    role,
    permissions: rolePermissions[role],
    hasPermission,
    checkPermissions,
    userCan,
  };
};

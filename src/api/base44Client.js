import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68751acb9adeb566b57bf1d5", 
  requiresAuth: true // Ensure authentication is required for all operations
});

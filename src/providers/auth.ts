import { AuthProvider } from "@refinedev/core";
// import { User } from "@/graphql/schema.types";
import { API_URL, dataProvider } from "./data";

// Credentials for demo purposes
export const authCredentials = {
  email: "michael.scott@dundermifflin.com",
  password: "demodemo"
};

// Authentication provider implementation
export const authProvider: AuthProvider = {
  // Login function
  login: async ({ email }) => {
    try {
      const { data } = await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          variables: { email },
          rawQuery: `
            mutation Login($email: String!) {
              login(loginInput: {
                email: $email
              }) {
                accessToken,
              }
            }
          `,
        },
      });

      localStorage.setItem("access_token", data.login.accessToken);

      return {
        success: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        success: false,
        error: {
          message: error instanceof Error ? error.message : "Login failed",
          name: "Invalid email or password",
        },
      };
    }
  },

  // Logout function
  logout: async () => {
    localStorage.removeItem("access_token");

    return {
      success: true,
      redirectTo: "/login",
    };
  },

  // Error handling function
  onError: async (error) => {
    if (error.statusCode === "UNAUTHENTICATED") {
      return { logout: true };
    }
    return { error };
  },

  // Check authentication status
  check: async () => {
    try {
      await dataProvider.custom({
        url: API_URL,
        method: "post",
        headers: {},
        meta: {
          rawQuery: `
            query Me {
              me {
                name
              }
            }
          `,
        },
      });

      return {
        authenticated: true,
        redirectTo: "/",
      };
    } catch (error) {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },

  // Get user identity function
  getIdentity: async () => {
    const accessToken = localStorage.getItem("access_token");

    try {
      const { data } = await dataProvider.custom<{ me: any }>({
        url: API_URL,
        method: "post",
        headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
        meta: {
          rawQuery: `
            query Me {
              me {
                id,
                name,
                email,
                phone,
                jobTitle,
                timezone,
                avatarUrl
              }
            }
          `,
        },
      });

      return data.me;
    } catch (error) {
      return undefined;
    }
  },
};

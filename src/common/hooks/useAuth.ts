import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';

const AUTH_FILE_URI = `${FileSystem.documentDirectory}auth.json`;

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const authFile = await FileSystem.getInfoAsync(AUTH_FILE_URI);
                if (authFile.exists) {
                    const authData = await FileSystem.readAsStringAsync(AUTH_FILE_URI);
                    const { isAuthenticated } = JSON.parse(authData);
                    setIsAuthenticated(isAuthenticated);
                }

                setIsLoading(false);
            } catch (error) {
                console.error('Ошибка при проверке авторизации:', error);
                setIsAuthenticated(false);
                setIsLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    return { isLoading, isAuthenticated };
};

export default useAuth;
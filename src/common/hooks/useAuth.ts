import { useEffect, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

const authStorage = new MMKV()

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const userToken = await authStorage.getString('userToken'); // Проверяем, есть ли токен пользователя в MMKV
                setIsAuthenticated(userToken !== null);
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
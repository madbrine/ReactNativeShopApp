const network = {
    get: {

    },
    post: {
        login: async (username: string, password: string) => {
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    })
                });
                const data = await response.json();
                const token = data.token;
                console.log(token);
                return token;
            } catch (error) {
                console.error("Ошибка при выполнении запроса:", error);
            }
        }
    }
}

export default network;
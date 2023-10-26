import * as FileSystem from 'expo-file-system';

async function writeToken(token: string) {
    try {
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'auth.json');
        if (!fileInfo.exists) {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'auth.json', JSON.stringify({ token }));
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'auth.json', JSON.stringify({ token }));
        }
    } catch (error) {
        console.error("Ошибка при записи токена:", error);
    }
}

export default writeToken;
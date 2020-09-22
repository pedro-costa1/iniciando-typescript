interface TechObject {
    title: string;
    experience: number;
}

interface CreatUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

export default function createUser({ name = '', email, password}: CreatUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}
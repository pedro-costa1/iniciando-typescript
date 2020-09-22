import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {
    const user = createUser({
        email: 'pedro_babysco@outlook.com',
        password: '123456',
        techs: [
            'Node.js',
            'React.js',
            'React Native',
            { title: 'Javascript', experience: 80 }
        ]
    });

    return response.json({ message: 'Hello World' });
}
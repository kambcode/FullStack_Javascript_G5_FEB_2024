import bcrypt from 'bcrypt';

const users = [
    { username: 'admin', password: bcrypt.hashSync('secret', 10) }
];

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).send('Authorization header is missing');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        next();
    } else {
        res.status(401).send('Invalid credentials');
    }
};

export default auth;
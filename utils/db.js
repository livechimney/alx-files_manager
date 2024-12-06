import { MongoClient } from 'mongodb';

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'files_manager';
const connectionString = `mongodb://${host}:${port}/${dbName}`;

class DBCLIENT {
    constructor() {
        this.db = null;
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (error) console.log(error);
            this.db = client.db(dbName);
            this.db.createCollection('users');
            this.db.createCollection('files');
        });
    }

    isAlive() {
        return !!this.db;
    }

    async nbUsers() {
        return this.db.collection('users').countDocuments();
    }

    async getUser(query) {
        console.log('QUERY IN DB.JS, query');
        const user = await this.db.collection('users').findOne(quuery);
        console.log('GET USER IN DB.JS', user);
        return user;
    }

    async nbFiles() {
        return this.db.collection('files').countDocuments();
    }
}

const dbClient = new DBCLiennt();
export default dbClient;

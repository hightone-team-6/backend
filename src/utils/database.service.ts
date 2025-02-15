import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { Collection, Db, MongoClient } from "mongodb";
import { Logger } from '@nestjs/common'
const logger = new Logger('Backend');

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
    private client: MongoClient
    db: Db
    coll: Collection<Document>
    
    onModuleDestroy() {
        this.client.close().then(() => {
            logger.log("Database connection has been successfully closed")
        });
    }

    onModuleInit() {
        this.client = new MongoClient(process.env.DATABASE_URL)
        this.client.connect()
        this.db = this.client.db(process.env.DATABASE)
        this.coll = this.db.collection(process.env.DATABASE_COLLECTION)
    }

    async findOneWithDTO<T>(data: { [key: string]: any }) {
        const document = await this.coll.findOne(data);
        return document as unknown as T;
    }

    async findWithDTO<T>() {
        const document = await this.coll.find();
        return document as unknown as T;
    }

    async findOne(data: { [key: string]: any }) {
        const document = await this.coll.findOne(data);
        return document;
    }

    async checkHavingdata(data: { [key: string]: any }) {
        if (await this.coll.findOne(data) !== null) {
            return true;
        }
        return false;
    }

    async upsertDocument(
        fData: { [key: string]: any },
        data: any,
    ) {
        if (await this.checkHavingdata(fData)) {
            return await this.coll.updateOne(fData, { $set: data });
        } else {
           return await this.coll.insertOne(data);
        }
    }
}
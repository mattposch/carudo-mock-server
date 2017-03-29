import {inject,  injectable} from 'inversify';
import { JsonDbService } from '../../jsondb/service/jsondb.service';

@injectable()
export class TodoService {

    constructor(@inject(JsonDbService.name) private _jsonDbService: JsonDbService
    ) {
    }

    public async findAll(): Promise<any[]> {      
      return await this._jsonDbService.findAll();
    }

    public async findById(_id: string): Promise<any> {
        return await this._jsonDbService.findById(_id);
    }

    public async create(request: any): Promise<any> {
        return await this._jsonDbService.create(request);
    }

    public async update(_id: string, request: any): Promise<any> {
        await this._jsonDbService.update(_id, request);
        return await this._jsonDbService.findById(_id);
    }

    public async delete(_id: string): Promise<boolean> {
        await this._jsonDbService.delete(_id);
        return true;
    }
}

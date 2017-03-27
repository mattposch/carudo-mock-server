import { inject, injectable} from 'inversify';

import { JsonDbService } from './jsondb.service';

@injectable()
export class TodoService {

    constructor(
        @inject(JsonDbService.name) private _jsonDbService: JsonDbService
    ) {
      var generatedData = [
        {
          "_id": "58c3287be4a9fa06f011b9e3",
          "text": "short name",
          "createdOn": "2017-03-10T22:28:11.847Z",
          "modifiedOn": "2017-03-10T23:10:49.139Z",
          "isDone": false
        },
        {
          "_id": "58c331b4e4a9fa06f011b9e4",
          "text": "new todo1",
          "createdOn": "2017-03-10T23:07:32.921Z",
          "modifiedOn": "2017-03-21T14:39:59.508Z",
          "isDone": false
        },
        {
          "_id": "58c3325de4a9fa06f011b9e6",
          "text": "joko",
          "createdOn": "2017-03-10T23:10:21.733Z",
          "modifiedOn": "2017-03-11T15:08:48.471Z",
          "isDone": false
        },
        {
          "_id": "58c3ed82896c240d7378663f",
          "text": "lkjlkj",
          "createdOn": "2017-03-11T12:28:50.409Z",
          "modifiedOn": "2017-03-11T12:28:50.409Z",
          "isDone": false
        }
      ];

      this._jsonDbService.init(generatedData);
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

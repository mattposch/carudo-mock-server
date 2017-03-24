import { inject, injectable} from 'inversify';

import { TodoRepository } from '../repository/todo.repository';
import { ITodoDbModel } from '../model/todo.db.model';
import { TodoCreateRequest } from '../request/todo.create.request';
import { TodoEditRequest } from '../request/todo.edit.request';

/*
JsonDbService.init(dataGen());
JsonDbService.insert();
JsonDbService.update();
JsonDbService.delete();
JsonDbService.get(id);
JsonDbService.find({query: ''});*/

@injectable()
export class TodoService {

    //private todos;

    constructor(
        @inject(TodoRepository.name) private _todoRepository: TodoRepository
    ) {
        //this.todos = this.dataGen();
    }

    public dataGen() {
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
          "_id": "58c3327ee4a9fa06f011b9e7",
          "text": "very new todo",
          "createdOn": "2017-03-10T23:10:54.764Z",
          "modifiedOn": "2017-03-10T23:10:54.764Z",
          "isDone": false
        },
        {
          "_id": "58c3ed82896c240d7378663f",
          "text": "lkjlkj",
          "createdOn": "2017-03-11T12:28:50.409Z",
          "modifiedOn": "2017-03-11T12:28:50.409Z",
          "isDone": false
        },
        {
          "_id": "58c3edc6c25f150d873e1802",
          "text": "my second todo",
          "createdOn": "2017-03-11T12:29:58.882Z",
          "modifiedOn": "2017-03-11T12:29:58.882Z",
          "isDone": false
        },
        {
          "_id": "58c3ee3d2070e10daf40e267",
          "text": "updated textfoobar",
          "createdOn": "2017-03-11T12:31:57.884Z",
          "modifiedOn": "2017-03-11T12:34:37.086Z",
          "isDone": true
        },
        {
          "_id": "58c3ef8913819a0dc850863c",
          "text": "YEEEAAAHHH2",
          "createdOn": "2017-03-11T12:37:29.409Z",
          "modifiedOn": "2017-03-11T12:37:35.219Z",
          "isDone": false
        },
        {
          "_id": "58c9924f23c825001130264c",
          "text": "asdfsadf",
          "createdOn": "2017-03-15T19:13:19.447Z",
          "modifiedOn": "2017-03-15T19:13:19.447Z",
          "isDone": false
        },
        {
          "_id": "58c9924f23c825001130264b",
          "text": "asdfsadf",
          "createdOn": "2017-03-15T19:13:19.434Z",
          "modifiedOn": "2017-03-15T19:13:19.434Z",
          "isDone": false
        },
        {
          "_id": "58d10f04883c0c00118dc2a3",
          "text": "alksjdf",
          "createdOn": "2017-03-21T11:31:16.189Z",
          "modifiedOn": "2017-03-21T11:31:16.189Z",
          "isDone": false
        },
        {
          "_id": "58d10f04883c0c00118dc2a4",
          "text": "alksjdf",
          "createdOn": "2017-03-21T11:31:16.523Z",
          "modifiedOn": "2017-03-21T11:31:16.523Z",
          "isDone": false
        },
        {
          "_id": "58d140e2e8ac870011596cd7",
          "text": "abc xyz todo",
          "createdOn": "2017-03-21T15:04:02.723Z",
          "modifiedOn": "2017-03-21T15:04:02.724Z",
          "isDone": false
        }
      ];
      return generatedData;
      // create and return 1000 todo objects with faker.js
    }

    public async findAll(): Promise<ITodoDbModel[]> {
        return await this._todoRepository.find({});
        //return this.dataGen();
    }

    public async findById(_id: string): Promise<ITodoDbModel> {
        return await this._todoRepository.findById(_id);
    }

    public async create(todoRequest: TodoCreateRequest): Promise<ITodoDbModel> {
        return await this._todoRepository.create(todoRequest);
    }

    public async update(_id: string, todoRequest: TodoEditRequest): Promise<ITodoDbModel> {
        await this._todoRepository.update(_id, todoRequest);
        return await this._todoRepository.findById(_id);
    }

    public async delete(_id: string): Promise<boolean> {
        await this._todoRepository.delete(_id);
        return true;
    }
}

import { injectable} from 'inversify';

/*
JsonDbService.init(dataGen());
JsonDbService.insert();
JsonDbService.update();
JsonDbService.delete();
JsonDbService.get(id);
JsonDbService.find({query: ''});*/

@injectable()
export class JsonDbService {

    data: any[];

    constructor(
    ) {
        //this.data = this.dataGen();
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
        }
      ];
      return generatedData;
      // create and return 1000 todo objects with faker.js
    }

    public async init(data: any[]): Promise<boolean> {
        this.data = data;
        return true;
    }

    public async findAll(): Promise<any[]> {
        return this.data;
    }

    public async findById(_id: string): Promise<any> {
        var element = {
          "message": "Not found Element with id: " + _id,
          "name": "Error"
        };

        for (var index in this.data){
          if(this.data[index]._id ==  _id){
              element = this.data[index];
          }
        }

       return element;
    }

    public async create(request: any): Promise<any> {
        this.data.push(request);

        console.log("DATA AFTER CREATE");
        console.log(this.data);

        return request;
    }

    public async update(_id: string, request: any): Promise<any> {
      for (var index in this.data){
        if(this.data[index]._id ==  _id){
            this.data.splice(Number(index), 1);
            this.data.push(request);
        }
      }

      return request;
    }

    public async delete(_id: string): Promise<boolean> {

      for (var index in this.data){
        if(this.data[index]._id ==  _id){
            this.data.splice(Number(index), 1);
        }
      }

      return true;
    }
}

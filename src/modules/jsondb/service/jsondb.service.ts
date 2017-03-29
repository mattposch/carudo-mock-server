import { injectable} from 'inversify';

/*JsonDbService.init(dataGen());
JsonDbService.insert();
JsonDbService.update();
JsonDbService.delete();
JsonDbService.get(id);
JsonDbService.find({query: ''});*/

@injectable()
export class JsonDbService {

    public data: any[];

    constructor(
    ) {
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

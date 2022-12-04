import {Producer} from "../Database/Entity";
import {ProducerRepo} from "../Database/DBRepos";

export class ProducersService{
    public async GetProducer(producerId: number): Promise<Producer | never>{
        try{
            return await ProducerRepo.findOneOrFail({
                where: {
                    id: producerId
                }
            })
        }catch{
            throw new Error("error while searching producer with this id")
        }
    }
}
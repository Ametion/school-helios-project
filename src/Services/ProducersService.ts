import {Producer} from "../Database/Entity";
import {ProducerRepo} from "../Database/DBRepos";
import {ProducerModel} from "../Models";

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

    public async GetAllProducers(): Promise<Array<ProducerModel>>{
        try{
            const arr = new Array<ProducerModel>()

            const producers = await ProducerRepo.find()

            producers.forEach(p => arr.push(new ProducerModel(p.id, p.firstName, p.secondName)))

            return arr
        }catch{
            return []
        }
    }

    public async AddProducer(firstName: string, secondName: string): Promise<boolean>{
        try{
            if(!firstName || !secondName){
                return false
            }

            const producer = ProducerRepo.create({
                firstName: secondName,
                secondName: secondName
            })

            await producer.save()

            return true
        }catch{
            return false
        }
    }
}
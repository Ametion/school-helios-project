import {PremieresRepo} from "../Database/DBRepos";

export class PremieresService{
    public async GetAllPremieresByDate(date: string): Promise<any>{
        try{
            const arr = new Array()

            if(!date){
                return []
            }

            const premieres = await PremieresRepo.find({
                relations:{
                    film: {
                        producer: true,
                    },
                    hall: true
                }
            })

            premieres.forEach(p => {
                if(p.premiereDate.toISOString().slice(0, 10) == date){
                    arr.push(p)
                }
            })

            return arr
        }catch{
            return ""
        }
    }
}
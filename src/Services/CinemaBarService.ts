import {CinemaBarItemModel} from "../Models/CinemaBarItemModel";
import {CinemaBarItemsRepo} from "../Database/DBRepos";

export class CinemaBarService{
    public async GetAllCinemaBarItems(): Promise<Array<CinemaBarItemModel>>{
        try {
            const arr = new Array<CinemaBarItemModel>()

            const items = await CinemaBarItemsRepo.find()

            items.forEach(i => arr.push(new CinemaBarItemModel(i.id, i.itemName, i.itemAmount, i.itemPrice)))

            return arr
        }catch{
            return []
        }
    }

    public async AddCinemaBarItem(itemName: string, itemAmount: number, itemPrice: number): Promise<boolean>{
        try{
            if(!itemName || itemAmount < 0 || itemPrice <= 0){
                return false
            }

            const item = CinemaBarItemsRepo.create({
                itemName: itemName,
                itemPrice: itemPrice,
                itemAmount: itemAmount
            })

            await item.save()

            return true
        }catch{
            return false
        }
    }
}
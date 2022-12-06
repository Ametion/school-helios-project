import {PremieresService} from "./PremieresService";
import {CustomersService} from "./CustomersService";
import {TicketsRepo} from "../Database/DBRepos";
import {
    CinemaWorkerModel,
    CustomerModel,
    FilmModel,
    HallModel,
    PremiereModel,
    ProducerModel,
    TicketModel
} from "../Models";

export class TicketsService{
    private readonly premieresService: PremieresService
    private readonly customersService: CustomersService

    constructor() {
        this.premieresService = new PremieresService()
        this.customersService = new CustomersService()
    }

    public async BuyTicket(premiereId: number, customerId: number): Promise<boolean>{
        try{
            const isPremiereExist = await this.premieresService.PremiereExist(premiereId)
            const isCustomerExist = await this.customersService.CustomerExist(customerId)

            if(!isPremiereExist || !isCustomerExist){
                return false
            }

            const tickets = await TicketsRepo.find({
                where: {
                    premiere:{
                        id: premiereId
                    }
                },
                relations: {
                    premiere:{
                        hall: true,
                        film: true
                    }
                }
            })

            if(!tickets.length){
                const ticket = TicketsRepo.create({
                    premiere: {
                        id: premiereId
                    },
                    customer: {
                        id: customerId
                    }
                })

                await ticket.save()

                return true
            }

            if(tickets.length < tickets[0].premiere.hall.seatsAmount){
                const ticket = TicketsRepo.create({
                    premiere: {
                        id: premiereId
                    },
                    customer: {
                        id: customerId
                    }
                })

                await ticket.save()

                return true
            }

            return false
        }catch{
            return false
        }
    }

    public async GetAllCustomerTickets(customerId: number): Promise<Array<TicketModel>>{
        try{
            const arr = new Array<TicketModel>()

            const isCustomerExist = await this.customersService.CustomerExist(customerId)

            if(!isCustomerExist){
                return []
            }

            const tickets = await TicketsRepo.find({
                where: {
                    customer: {
                        id: customerId
                    }
                },
                relations: {
                    customer: true,
                    premiere: {
                        hall: {
                            hallWorker: true
                        },
                        film: {
                            producer: true
                        }
                    }
                }
            })

            tickets.forEach(t => arr.push(new TicketModel(t.id, new CustomerModel(t.customer.id, t.customer.firstName, t.customer.secondName, t.customer.age, t.customer.login),
                new PremiereModel(t.premiere.id, t.premiere.premiereDate.toISOString(), new HallModel(t.premiere.hall.id, t.premiere.hall.hallName, t.premiere.hall.seatsAmount,
                    new CinemaWorkerModel(t.premiere.hall.hallWorker.id, t.premiere.hall.hallWorker.firstName, t.premiere.hall.hallWorker.secondName)),
                    new FilmModel(t.premiere.film.id, t.premiere.film.filmName, t.premiere.film.filmDescription, t.premiere.film.rate, t.premiere.film.date.toISOString(), t.premiere.film.image,
                        new ProducerModel(t.premiere.film.producer.id, t.premiere.film.producer.firstName, t.premiere.film.producer.secondName, t.premiere.film.producer.image))))))

            return arr
        }catch{
            return []
        }
    }
}
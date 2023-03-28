import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('ITEM_MICROSERVICE') private readonly client: ClientProxy) {}

    @Get('/ab')
    health():string {
    return "system running"
    
    }

    @Get('/create')
    createItem() {
     console.log("req")
      this.client.emit('process_payment',{data:"hi"});
      return this.client.send({ cmd: 'create' },{});
    }
    
}

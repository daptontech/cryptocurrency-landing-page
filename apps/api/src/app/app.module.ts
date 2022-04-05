import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { CryptocurrenciesModule } from "../cryptocurrencies/cryptocurrencies.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CryptocurrenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

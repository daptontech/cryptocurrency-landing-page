import { Module } from '@nestjs/common';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CryptoCurrency,
  CryptoCurrencySchema,
} from '../schemas/cryptocurrency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CryptoCurrency.name, schema: CryptoCurrencySchema },
    ]),
  ],
  controllers: [CryptocurrenciesController],
  providers: [CryptocurrenciesService],
})
export class CryptocurrenciesModule {}

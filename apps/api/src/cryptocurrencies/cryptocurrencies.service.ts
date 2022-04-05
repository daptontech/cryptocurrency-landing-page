import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CryptoCurrency,
  CryptoCurrencyDocument,
} from '../schemas/cryptocurrency.schema';
import { Model } from 'mongoose';
import { CreateCryptocurrencyDto } from '../dto/create-cryptocurrency.dto';

@Injectable()
export class CryptocurrenciesService {
  constructor(
    @InjectModel(CryptoCurrency.name)
    private cryptoCurrencyModel: Model<CryptoCurrencyDocument>,
  ) {}

  async create(createCatDto: CreateCryptocurrencyDto): Promise<CryptoCurrency> {
    return await this.cryptoCurrencyModel.create(createCatDto);
  }

  async findAll(): Promise<CryptoCurrency[]> {
    return this.cryptoCurrencyModel.find().exec();
  }

  async findOne(id: string): Promise<CryptoCurrency> {
    return this.cryptoCurrencyModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.cryptoCurrencyModel.findByIdAndRemove({ _id: id }).exec();
  }
}

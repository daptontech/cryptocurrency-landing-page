import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { CreateCryptocurrencyDto } from '../dto/create-cryptocurrency.dto';
import { CryptoCurrency } from '../schemas/cryptocurrency.schema';

@Controller('cryptocurrencies')
export class CryptocurrenciesController {
  constructor(
    private readonly cryptocurrenciesService: CryptocurrenciesService,
  ) {}

  @Post()
  async create(@Body() createCatDto: CreateCryptocurrencyDto) {
    await this.cryptocurrenciesService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<CryptoCurrency[]> {
    return this.cryptocurrenciesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CryptoCurrency> {
    return this.cryptocurrenciesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cryptocurrenciesService.delete(id);
  }
}

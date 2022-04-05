import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { CryptoCurrency } from '../schemas/cryptocurrency.schema';

const mockCryptoCurrency = {
  name: 'Bitcoin',
  price: 433,
  icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
  shortForm: 'ETH',
  changePercentage: -2.75,
  history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
};

describe('CryptocurrenciesService', () => {
  let service: CryptocurrenciesService;
  let model: Model<CryptoCurrency>;

  const cryptocurrencyArray = [
    {
      name: 'Bitcoin',
      price: 433,
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
      shortForm: 'ETH',
      changePercentage: -2.75,
      history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
    },
    {
      name: 'Ethereum',
      price: 434,
      icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022',
      shortForm: 'ETH',
      changePercentage: -2.75,
      history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CryptocurrenciesService,
        {
          provide: getModelToken('CryptoCurrency'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockCryptoCurrency),
            constructor: jest.fn().mockResolvedValue(mockCryptoCurrency),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CryptocurrenciesService>(CryptocurrenciesService);
    model = module.get<Model<CryptoCurrency>>(getModelToken('CryptoCurrency'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all currencies', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(cryptocurrencyArray),
    } as any);
    const cryptoCurrencies = await service.findAll();
    expect(cryptoCurrencies).toEqual(cryptocurrencyArray);
  });

  it('should insert a new cryptocurrency', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        name: 'Bitcoin',
        price: 433,
        icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
        shortForm: 'ETH',
        changePercentage: -2.75,
        history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
      }),
    );
    const newCat = await service.create({
      name: 'Bitcoin',
      price: 433,
      icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
      shortForm: 'ETH',
      changePercentage: -2.75,
      history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
    });
    expect(newCat).toEqual(mockCryptoCurrency);
  });
});

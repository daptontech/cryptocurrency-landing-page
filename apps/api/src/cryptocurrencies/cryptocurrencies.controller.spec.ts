import { Test, TestingModule } from '@nestjs/testing';
import { CryptocurrenciesController } from './cryptocurrencies.controller';
import { CryptocurrenciesService } from './cryptocurrencies.service';
import { CreateCryptocurrencyDto } from '../dto/create-cryptocurrency.dto';

describe('Cryptocurrencies Controller', () => {
  let controller: CryptocurrenciesController;
  let service: CryptocurrenciesService;
  const createCryptocurrencyDto: CreateCryptocurrencyDto = {
    name: 'Bitcoin',
    price: 433,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022',
    shortForm: 'BTC',
    changePercentage: -2.75,
    history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
  };

  const mockCryptocurrency = {
    name: 'Bitcoin',
    price: 433,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022',
    shortForm: 'BTC',
    changePercentage: -2.75,
    history: [-61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62],
    _id: 'a id',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptocurrenciesController],
      providers: [
        {
          provide: CryptocurrenciesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'Bitcoin',
                price: 433,
                icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
                shortForm: 'BTC',
                changePercentage: -2.75,
                history: [
                  -61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62,
                ],
              },
              {
                name: 'Ethereum',
                price: 434,
                icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022',
                shortForm: 'ETH',
                changePercentage: -2.75,
                history: [
                  -61, -48, -69, -52, -60, -40, -79, -60, -59, -43, -62,
                ],
              },
            ]),
            create: jest.fn().mockResolvedValue(CreateCryptocurrencyDto),
          },
        },
      ],
    }).compile();

    controller = module.get<CryptocurrenciesController>(
      CryptocurrenciesController,
    );
    service = module.get<CryptocurrenciesService>(CryptocurrenciesService);
  });

  describe('create()', () => {
    it('should create a new cryptocurrency', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockCryptocurrency);

      await controller.create(createCryptocurrencyDto);
      expect(createSpy).toHaveBeenCalledWith(createCryptocurrencyDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of currencies', async () => {
      expect(controller.findAll()).resolves.toEqual([
        {
          name: 'Bitcoin',
          price: 433,
          icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
          shortForm: 'BTC',
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
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});

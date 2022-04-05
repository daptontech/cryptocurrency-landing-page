import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCryptocurrencyDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly shortForm: string;

  @IsNotEmpty()
  @IsInt()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly icon: string;

  @IsNotEmpty()
  readonly changePercentage: number;

  @IsNotEmpty()
  @IsArray()
  @IsInt({
    each: true,
  })
  readonly history: Array<number>;
}

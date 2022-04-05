import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CryptoCurrencyDocument = CryptoCurrency & Document;

@Schema()
export class CryptoCurrency {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  shortForm: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  changePercentage: number;

  @Prop({ required: true })
  history: Array<number>;
}

export const CryptoCurrencySchema =
  SchemaFactory.createForClass(CryptoCurrency);

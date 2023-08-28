import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Consoles extends Document {
  @Prop()
  codigo: Number;

  @Prop()
  nome: String;

  @Prop()
  dataLancamento: String;

  @Prop()
  empresa: String;
}

export const ConsolesSchema = SchemaFactory.createForClass(Consoles);
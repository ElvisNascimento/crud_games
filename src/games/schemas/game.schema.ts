import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Desenvolvedor } from './desenvolvedor.schema';
import { Consoles } from './consoles.schema';

@Schema()
export class Game extends Document {

  @Prop()
  nome: String;

  @Prop()
  descricao: String;

  @Prop()
  dataLancamento: String;

  @Prop()
  website: String;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'desenvolvedor' }] })
  desenvolvedor: Desenvolvedor[];

  @Prop()
  genero: String;

  @Prop()
  urlCapa: String;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'consoles' }] })
  consoles: Consoles[];
}

export const GameSchema = SchemaFactory.createForClass(Game);

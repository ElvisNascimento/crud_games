import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Desenvolvedor {
    @Prop()
    nome: String;
    @Prop()
    dataFundacao: String;
    @Prop()
    website: String;
    @Prop()
    sede: String;
};

export const DevSchema = SchemaFactory.createForClass(Desenvolvedor);
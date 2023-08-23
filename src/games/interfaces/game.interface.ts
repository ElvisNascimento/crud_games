import { Document } from 'mongoose';

export interface Game extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

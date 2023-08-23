import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://elvisnascimentodev:OiLb2DpZI9GWyhqe@cluster0.aumgkf2.mongodb.net/',
      ),
  },
];

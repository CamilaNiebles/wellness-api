import { ConfigModuleOptions } from '@nestjs/config';
import { configSchemaValidation } from '@config/config.schema';

export const configModuleOptions: ConfigModuleOptions = {
  envFilePath: [`.env.${process.env.STAGE}`],
  validationSchema: configSchemaValidation,
  isGlobal: true,
};

import { ConfigModuleOptions } from '@nestjs/config';
import { configSchemaValidation } from '@config/config.schema';

export const configModuleOptions: ConfigModuleOptions = {
  validationSchema: configSchemaValidation,
  isGlobal: true,
};

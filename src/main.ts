import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { EntityNotFoundErrorFilter } from "./filters/entity-not-found-error.filter";
import helmet from "helmet";
import { useContainer } from "class-validator";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(bootstrap.name);

  app.enableCors();
  app.use(helmet());

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new EntityNotFoundErrorFilter());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT || process.env.SERVER_PORT;

  await app.listen(port);
  logger.debug(`UENR Backend server is running on PORT: ${port}`);
}

bootstrap();

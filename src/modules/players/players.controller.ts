import { Body, Controller, Post } from '@nestjs/common';

import { CreatePlayerDTO } from './dtos/create-player-dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createPlayer(@Body() createPlayerDTO: CreatePlayerDTO) {
    const { email, name, phone } = createPlayerDTO;

    const playerService = await this.playersService.execute({
      email,
      name,
      phone,
    });

    return playerService;
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreatePlayerDTO } from './dtos/create-player-dto';
import { Player } from './interfaces/jogador.interface';
import { PlayersService } from './use-cases/players.service';

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

  @Get()
  async listPlayers(): Promise<Player[]> {
    return this.playersService.listPlayers();
  }
}

import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';

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
  async listPlayers(@Query('email') email: string): Promise<Player[] | Player> {
    if (email) {
      return this.playersService.findByEmail(email);
    } else {
      return this.playersService.listPlayers();
    }
  }

  @Delete()
  async deletePlayer(@Query('email') email: string): Promise<void> {
    this.playersService.deletePlayer(email);
  }
}

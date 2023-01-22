import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlayerDTO } from './dtos/create-player-dto';
import { Player } from './interfaces/jogador.interface';

@Injectable()
export class PlayersService {
  private readonly players: Player[] = [];

  private readonly logger = new Logger(PlayersService.name);

  async execute(createPlayerDTO: CreatePlayerDTO): Promise<void> {
    this.createPlayer(createPlayerDTO);
  }

  private createPlayer(createPlayerDTO: CreatePlayerDTO): void {
    const { email, phone, name } = createPlayerDTO;

    const player: Player = {
      _id: randomUUID(),
      email,
      name,
      phone,
      ranking: 'A',
      playerPhotoUrl: 'www.google.com.br/foto123.jpg',
      rankingPosition: 1,
    };

    this.logger.log(player);

    this.players.push(player);
  }
}

export interface Player {
  readonly _id: string;
  name: string;
  readonly phone: string;
  readonly email: string;
  ranking: string;
  rankingPosition: number;
  playerPhotoUrl: string;
}

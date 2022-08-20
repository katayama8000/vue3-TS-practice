export interface scoreType {
  score: number;
  highScore: string | null;
}

export interface coordType {
  reactIcon: number[];
  snake: number[][];
  direction: number[];
}

export interface stateType {
  delay: number | null;
  isGameOver: boolean;
  speedUp: number;
}

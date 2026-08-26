export type WordType = 'noun' | 'verb' | 'punctuation' | 'unknown';

export interface WordDictionary {
  nouns: string[];
  verbs: string[];
  punctuation: string[];
}

export interface ClassifiedWord {
  raw: string;
  normalized: string;
  type: WordType;
  damage: number;
  shieldAmount: number;
  critMultiplier: number;
}

export interface Correction {
  id: number;
  playerIndex: number;
  projectileId: number | null;
  original: string;
  corrected: string;
  originalType: WordType;
  correctedType: WordType;
  severity: number;
  timestamp: number;
  note?: string;
}

export interface PlayerState {
  id: number;
  name: string;
  color: number;
  x: number;
  y: number;
  health: number;
  maxHealth: number;
  shield: number;
  maxShield: number;
  score: number;
  hits: number;
  misses: number;
  corrections: number;
  alive: boolean;
  facing: 1 | -1;
  lastHitAt: number;
}

export interface ProjectileState {
  id: number;
  ownerIndex: number;
  originalText: string;
  text: string;
  type: WordType;
  damage: number;
  shieldAmount: number;
  critMultiplier: number;
  speed: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  lifetime: number;
  corrected: boolean;
  active: boolean;
}

export type GameStatus = 'ready' | 'playing' | 'ended';

export interface GameState {
  status: GameStatus;
  winnerIndex: number | null;
  players: PlayerState[];
  projectiles: ProjectileState[];
  corrections: Correction[];
  elapsed: number;
  nextId: number;
}

export interface MemeCardData {
  winnerIndex: number | null;
  players: PlayerState[];
  worstCorrections: Correction[];
  elapsed: number;
}

export type PlayerInputEvent =
  | { type: 'fire'; playerIndex: number; word: string }
  | { type: 'backspace'; playerIndex: number };
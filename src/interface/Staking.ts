export class CakeStaking {
  staking: Share [];
}

export class Share {
  id: string;
  apy: number;
}

export class Stats {
  data: StatsData;

}

export class StatsData {
  masternodes: Masternodes;
  burned: Burned;
}

export class Burned {
  total: number;
}

export class Masternodes {
  locked: LockedMasternodes [];
}

export class LockedMasternodes {
  weeks: number;
  count: number;
  tvl: number;
}

import { EMA } from "technicalindicators";

export function generateSignal(prices: number[]) {
  const ema50 = EMA.calculate({ period: 3, values: prices });
  const lastPrice: any = prices[prices.length - 1];

  if (lastPrice > ema50.at(-1)!) return "BUY";
  if (lastPrice < ema50.at(-1)!) return "SELL";

  return "HOLD";
}

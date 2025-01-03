/*
20ft    10ft    6m    3m    dec   mar  logmar
20/1000	10/500	6/300	3/150	0.02	50	  1.70
20/800	10/400	6/240	3/120	0.025	40	  1.60
20/600	10/300	6/180	3/90	0.033	30	  1.48
20/500	10/250	6/150	3/75	0.04	25	  1.40
20/400	10/200	6/120	3/60	0.05	20	  1.30
20/300	10/150	6/90	3/45	0.067	15	  1.18
20/250	10/125	6/75	3/37	0.08	12.5	1.10
20/200	10/100	6/60	3/30	0.10	10	  1.00
20/160	10/80	  6/48	3/24	0.125	8	    0.90
20/125	10/62	  6/38	3/19	0.16	6.25	0.80
20/100	10/50	  6/30	3/15	0.20	5	    0.70
20/80	  10/40	  6/24	3/12	0.25	4	    0.60
20/60	  10/30	  6/18	3/9	  0.33	3	    0.48
20/50	  10/25	  6/15	3/7.5	0.40	2.5	  0.40
20/40	  10/20	  6/12	3/6	  0.50	2	    0.30
20/30	  10/15	  6/9	  3/4.5	0.67	1.5	  0.18
20/25	  10/12	  6/7.5	3/4	  0.80	1.25	0.10
20/20	  10/10	  6/6	  3/3	  1.00	1	    0.00
20/16	  10/8	  6/4.8	3/2.4	1.25	0.8	  −0.10
20/12.5	10/6	  6/3.8	3/2	  1.60	0.625	−0.20
20/10	  10/5	  6/3	  3/1.5	2.00	0.5	  −0.30
20/8	  10/4	  6/2.4	3/1.2	2.50	0.4	  −0.40
20/6.6	10/3.3	6/2	  3/1	  3.00	0.333	−0.48

distance/acuity=dec acuity/distance=mar log(mar)=logmar

*/

import { UnitSystem } from './unit-system'

export interface SnellenChartItem {
  ratio: SnellenChartRatio
  metric: number
  imperial: number
  decimal: number
}

export const getMar = (value: SnellenChartItem) => 1 / value.decimal

export const getLogMar = (value: SnellenChartItem) => Math.log10(1 / value.decimal)

export type SnellenDictionary = {
  [key in SnellenChartRatio]: SnellenChartItem
}

export const SnellenChartDictionary: SnellenDictionary = {
  '0.1': {
    ratio: '0.1',
    metric: 60,
    imperial: 200,
    decimal: 0.1
  },
  '0.125': {
    ratio: '0.125',
    metric: 48,
    imperial: 160,
    decimal: 0.125
  },
  '0.16': {
    ratio: '0.16',
    metric: 38,
    imperial: 125,
    decimal: 0.16
  },
  '0.2': {
    ratio: '0.2',
    metric: 30,
    imperial: 100,
    decimal: 0.2
  },
  '0.25': {
    ratio: '0.25',
    metric: 24,
    imperial: 80,
    decimal: 0.25
  },
  '0.33': {
    ratio: '0.33',
    metric: 18,
    imperial: 60,
    decimal: 0.33
  },
  '0.4': {
    ratio: '0.4',
    metric: 15,
    imperial: 50,
    decimal: 0.4
  },
  '0.5': {
    ratio: '0.5',
    metric: 12,
    imperial: 40,
    decimal: 0.5
  },
  '0.67': {
    ratio: '0.67',
    metric: 9,
    imperial: 30,
    decimal: 0.67
  },
  '0.8': {
    ratio: '0.8',
    metric: 7.5,
    imperial: 25,
    decimal: 0.8
  },
  '1.0': {
    ratio: '1.0',
    metric: 6,
    imperial: 20,
    decimal: 1
  }
}

export type SnellenChartRatio =
  | '0.1'
  | '0.125'
  | '0.16'
  | '0.2'
  | '0.25'
  | '0.33'
  | '0.4'
  | '0.5'
  | '0.67'
  | '0.8'
  | '1.0'
export type BaseDistanceType = {
  [key in UnitSystem]: number
}

export const snellenChartList = Object.keys(SnellenChartDictionary) as SnellenChartRatio[]

export const BaseDistance: BaseDistanceType = {
  Metric: 6,
  Imperial: 20
}

export const isSnellenChartRatio = (test: string): test is SnellenChartRatio => {
  return SnellenChartDictionary[test] !== undefined
}

export const sortByDecimal = (a, b) =>
  SnellenChartDictionary[a].decimal - SnellenChartDictionary[b].decimal

export const sortSnellenChartRatios = (ratios: SnellenChartRatio[]): SnellenChartRatio[] => {
  return ratios.sort(sortByDecimal)
}

import { useMemo } from 'react'
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil'
import PortfolioItem from '../components/LabSettings/PortfolioItem'
import { Portfolio } from './labSettingState'

export type PortfolioResult = {
  id: number
  name: string
  returns: {
    x: Date
    y: number
  }[]
  monthlyRate: {
    x: Date
    y: number
  }[]
  yearlyRate: {
    x: number
    y: number
  }[]
  indicator: Indicator
}

type YearMonthRate = {
  year: number
  month: number
}

export type Indicator = {
  finalBalance: number
  cagr: number
  stdev: number
  mdd: number
  sharpeRatio: number
  sortinoRatio: number | null
  best: YearMonthRate
  worst: YearMonthRate
}

type Report = PortfolioResult[]

const reportState = atom<Report>({
  key: 'reportState',
  default: [],
})

const isReportReady = selector<boolean>({
  key: 'isReportReady',
  get: ({ get }) => get(reportState).length > 0,
})

export function useReportValue() {
  return useRecoilValue(reportState)
}

export function useSetReport() {
  return useSetRecoilState(reportState)
}

const monthsCount = selector({
  key: 'monthsCount',
  get: ({ get }) => get(reportState)?.[0]?.returns.length,
})

export function useMonthsCount() {
  return useRecoilValue(monthsCount)
}

export function useResetReport() {
  return useResetRecoilState(reportState)
}

export function useIsReportReady() {
  return useRecoilValue(isReportReady)
}

// type ReportState = {
//   portfolioReturns:
//     | {
//         label: string
//         lineTension: number
//         data: {
//           x: Date
//           y: number
//         }[]
//       }[]
//     | null
// }

// const reportState = atom<ReportState>({
//   key: 'reportState',
//   default: {
//     portfolioReturns: null,
//   },
// })

// export function useReportState() {
//   return useRecoilState(reportState)
// }

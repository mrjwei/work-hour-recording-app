export type TStatus = 'BEFORE-WORK' | 'IN-WORK' | 'IN-BREAK' | 'AFTER-WORK'

export interface IRecord {
  id: string
  userid: string
  date: string
  starttime: string
  breaks: IBreak[]
  endtime: string | null
}

export interface IPaddedRecord extends Omit<IRecord, 'id' | 'userid'> {
  id?: any
  totalbreakhours: string
  totalworkhours: string
}

export interface IBreak {
  id: string
  recordId: string
  starttime: string
  endtime: string | null
}

export interface IGenericBreak extends Omit<IBreak, 'recordId' | 'starttime' | 'endtime'> {
  [key: string]: any
}

export type TDateIndexedRecords = {
  [key: string]: IRecord
}

export type TRecordsProps = {
  searchParams: {
    month?: string
    date?: string
  }
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  hourlywages?: number
  currency?: string
  taxincluded?: boolean
}

export type TSignupProps = {
  searchParams: {
    email: string
  }
}

export type TNotificationType = 'empty break end time' | 'empty work end time'

export interface INotification {
  type: TNotificationType
  navigateToPath: string
  text: string
  isUrgent: boolean
}

// export type TActionState = {
//   message: string
//   errors: {
//     date: string[]
//     starttime: string[]
//     existingBreaks: string[]
//     newBreaks: string[]
//     endTime: string[]
//   }
// }

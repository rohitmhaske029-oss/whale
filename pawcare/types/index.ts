// types/index.ts

export interface Pet {
  id: string
  userId: string
  name: string
  species: string
  breed?: string | null
  birthDate?: Date | null
  weight?: number | null
  sex?: string | null
  neutered: boolean
  color?: string | null
  photoUrl?: string | null
  createdAt: Date
  updatedAt: Date
  weightHistory?: WeightRecord[]
  medications?: Medication[]
  vaccinations?: Vaccination[]
  appointments?: Appointment[]
  conditions?: HealthCondition[]
}

export interface WeightRecord {
  id: string
  petId: string
  weight: number
  recordedAt: Date
}

export interface Medication {
  id: string
  petId: string
  name: string
  dosage: string
  frequency: string
  startDate: Date
  endDate?: Date | null
  notes?: string | null
  active: boolean
  createdAt: Date
}

export interface Vaccination {
  id: string
  petId: string
  name: string
  dateGiven: Date
  nextDue?: Date | null
  vetName?: string | null
  notes?: string | null
  createdAt: Date
}

export interface Appointment {
  id: string
  petId: string
  title: string
  dateTime: Date
  vetName?: string | null
  clinic?: string | null
  notes?: string | null
  completed: boolean
  createdAt: Date
}

export interface HealthCondition {
  id: string
  petId: string
  name: string
  diagnosedAt?: Date | null
  notes?: string | null
  active: boolean
  createdAt: Date
}

export interface TriageSession {
  id: string
  petId: string
  urgency?: string | null
  summary?: string | null
  messages: TriageMessage[]
  createdAt: Date
}

export interface TriageMessage {
  id: string
  sessionId: string
  role: 'user' | 'assistant'
  content: string
  createdAt: Date
}

export interface WellnessPlan {
  id: string
  petId: string
  plan: WellnessPlanData
  createdAt: Date
  updatedAt: Date
}

export interface WellnessPlanData {
  summary: string
  exercise: PlanItem[]
  diet: PlanItem[]
  grooming: PlanItem[]
  preventiveCare: PlanItem[]
}

export interface PlanItem {
  title: string
  description: string
  frequency: string
  priority: 'high' | 'medium' | 'low'
}

export type UrgencyLevel = 'home_monitor' | 'schedule_vet' | 'emergency'

export type UserPlan = 'FREE' | 'PREMIUM'

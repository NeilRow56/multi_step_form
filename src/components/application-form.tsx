'use client'

import { formSchema, FormSchemaType } from '@/schema/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PersonalInformation from './steps/personal-information'

export type Step = {
  id: string
  title: string
  description: string
  component: () => React.JSX.Element
  inputs: (keyof FormSchemaType)[]
}

const steps = [
  {
    id: '1',
    title: 'Personal Information',
    description: 'Tell us about yourself',
    component: PersonalInformation,
    inputs: ['firstName', 'lastName', 'email', 'phone']
  }
]

export default function ApplicationForm() {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      county: '',
      town: '',
      address: '',
      postCode: '',
      jobs: [],
      github: '',
      portfolio: '',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  })

  return <div> Application Form</div>
}

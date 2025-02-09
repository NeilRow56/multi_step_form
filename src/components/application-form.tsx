'use client'

import { formSchema, FormSchemaType } from '@/schema/schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PersonalInformation from './steps/personal-information'
import AddressInformation from './steps/address-information'
import SocialLinks from './steps/social-links'
import ResumeUploader from './steps/resume-uploader'
import WorkExperience from './steps/work-experience'

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
  },
  {
    id: '2',
    title: 'Address',
    description: 'Enter your address information.',
    component: AddressInformation,
    inputs: ['country', 'state', 'city', 'address', 'zip', 'timezone']
  },
  {
    id: '3',
    title: 'Work Experience',
    description:
      'Enter your work experience. This information will be used to evaluate your application.',
    component: WorkExperience,
    inputs: ['jobs']
  },
  {
    id: '4',
    title: 'Social Links',
    description:
      'Enter your social links. This information helps us to know more about you.',
    component: SocialLinks,
    inputs: ['github', 'portfolio']
  },
  {
    id: '5',
    title: 'Resume',
    description:
      'Upload your resume. This information helps us to know more about you.',
    component: ResumeUploader,
    inputs: ['resume']
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

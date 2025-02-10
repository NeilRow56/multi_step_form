import React from 'react'

import { motion } from 'framer-motion'
import { Step } from './application-form'
import { useFormControls } from '@/hooks/use-form'

const RenderComponent = ({ steps }: { steps: Step[] }) => {
  const { currentPageIndex, delta } = useFormControls()

  const step = steps[currentPageIndex]
  const Comp = step.component
  if (!Comp) return null
  return (
    <motion.div
      key={currentPageIndex}
      initial={{ opacity: 0, x: delta > 0 ? '10%' : '-10%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut', type: 'tween' }}
      className='flex flex-1 flex-col gap-y-4 px-7'
    >
      <div>
        <h2 className='text-4xl font-bold leading-relaxed tracking-tight'>
          {step.title}
        </h2>
        <p className='text-sm text-foreground/70'>{step.description}</p>
      </div>
      {Comp && <Comp />}
    </motion.div>
  )
}

export default RenderComponent

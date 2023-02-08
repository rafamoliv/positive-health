import { Calendar } from '@/components'

import { SystemPage } from '@/templates'

const Schedule = () => {
  return (
    <SystemPage.Root title="Schedule">
      <SystemPage.Section>Body</SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Schedule

import { Calendar } from '@/components'

import { SystemPage } from '@/templates'

const Schedule = () => {
  return (
    <SystemPage.Root title="Dashboard">
      <SystemPage.Section>Body</SystemPage.Section>

      <SystemPage.Aside>
        <Calendar />
      </SystemPage.Aside>
    </SystemPage.Root>
  )
}

export default Schedule

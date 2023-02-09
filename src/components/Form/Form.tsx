import { FormButton } from './components/Button'
import { FormInput } from './components/Input'
import { FormRoot } from './components/Root'

/**
 * Form component
 *
 * Usage example:
 * <Form.Root>
 *  <Form.Input placeholder={'example'} />
 *  <Form.Button>Submit</Form.Button>
 * <Form.Root/>
 */

export const Form = {
  Root: FormRoot,
  Input: FormInput,
  Button: FormButton
}

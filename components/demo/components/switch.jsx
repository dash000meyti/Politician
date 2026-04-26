import {
  Label,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui"
import { Switch } from "@/components/ui"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export function SwitchDemoCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldLabel htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Share across devices</FieldTitle>
            <FieldDescription>
              Focus is shared across devices, and turns off when you leave the
              app.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Enable notifications</FieldTitle>
            <FieldDescription>
              Receive notifications when focus mode is enabled or disabled.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}

export function SwitchDemoFull() {
  return (
    <FieldGroup className="w-full max-w-sm mx-auto">
      <Field orientation="horizontal" data-disabled className="w-fit">
        <Switch id="switch-disabled-unchecked" disabled />
        <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="switch-terms">
            Accept terms and conditions
          </FieldLabel>
          <FieldDescription>
            You must accept the terms and conditions to continue.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-terms" aria-invalid />
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-sm" size="sm" />
        <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Switch id="switch-size-default" size="default" />
        <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
      </Field>
    </FieldGroup>
  )
}
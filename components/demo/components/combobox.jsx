"use client"
import * as React from "react"
import { GlobeIcon } from "lucide-react"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxValue,
  useComboboxAnchor,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/components/ui"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui"
import {
  Button
} from "@/components/ui"
import {
  InputGroupAddon,
} from "@/components/ui"

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
]

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
]

const countries = [
  { code: "", value: "", continent: "", label: "Select country" },
  {
    code: "ar",
    value: "argentina",
    label: "Argentina",
    continent: "South America",
  },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "ca", value: "canada", label: "Canada", continent: "North America" },
  { code: "cn", value: "china", label: "China", continent: "Asia" },
  {
    code: "co",
    value: "colombia",
    label: "Colombia",
    continent: "South America",
  },
  { code: "eg", value: "egypt", label: "Egypt", continent: "Africa" },
  { code: "fr", value: "france", label: "France", continent: "Europe" },
  { code: "de", value: "germany", label: "Germany", continent: "Europe" },
  { code: "it", value: "italy", label: "Italy", continent: "Europe" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "ke", value: "kenya", label: "Kenya", continent: "Africa" },
  { code: "mx", value: "mexico", label: "Mexico", continent: "North America" },
  {
    code: "nz",
    value: "new-zealand",
    label: "New Zealand",
    continent: "Oceania",
  },
  { code: "ng", value: "nigeria", label: "Nigeria", continent: "Africa" },
  {
    code: "za",
    value: "south-africa",
    label: "South Africa",
    continent: "Africa",
  },
  { code: "kr", value: "south-korea", label: "South Korea", continent: "Asia" },
  {
    code: "gb",
    value: "united-kingdom",
    label: "United Kingdom",
    continent: "Europe",
  },
  {
    code: "us",
    value: "united-states",
    label: "United States",
    continent: "North America",
  },
]

export function ComboboxDemo() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoMultiple() {
  const anchor = useComboboxAnchor()
  return (
    <Combobox
      multiple
      autoHighlight
      items={frameworks}
      defaultValue={[frameworks[0]]}
    >
      <ComboboxChips ref={anchor} className="w-full max-w-xs">
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value) => (
                <ComboboxChip key={value}>{value}</ComboboxChip>
              ))}
              <ComboboxChipsInput />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoClear() {
  return (
    <Combobox items={frameworks} defaultValue={frameworks[0]}>
      <ComboboxInput placeholder="Select a framework" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoGroupsAndSeparator() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone" />
      <ComboboxContent>
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group, index) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
              {index < timezones.length - 1 && <ComboboxSeparator />}
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoCustomItems() {
  return (
    <Combobox
      items={countries.filter((country) => country.code !== "")}
      itemToStringValue={(country) => country.label}
    >
      <ComboboxInput placeholder="Search countries..." />
      <ComboboxContent>
        <ComboboxEmpty>No countries found.</ComboboxEmpty>
        <ComboboxList>
          {(country) => (
            <ComboboxItem key={country.code} value={country}>
              <Item size="xs" className="p-0">
                <ItemContent>
                  <ItemTitle className="whitespace-nowrap">
                    {country.label}
                  </ItemTitle>
                  <ItemDescription>
                    {country.continent} ({country.code})
                  </ItemDescription>
                </ItemContent>
              </Item>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoInvalid() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" aria-invalid="true" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoDisabled() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" disabled />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoAutoHighlight() {
  return (
    <Combobox items={frameworks} autoHighlight>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export function ComboboxDemoPopup() {
  return (
    <>
      <Combobox items={countries} defaultValue={countries[0]}>
        <ComboboxTrigger render={<Button variant="outline" className="w-64 justify-between font-normal"><ComboboxValue /></Button>} />
        <ComboboxContent>
          <ComboboxInput showTrigger={false} placeholder="Search" />
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.code} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </>
  )
}

export function ComboxboxDemoInputGroup() {
  return (
    <Combobox items={timezones}>
      <ComboboxInput placeholder="Select a timezone">
        <InputGroupAddon>
          <GlobeIcon />
        </InputGroupAddon>
      </ComboboxInput>
      <ComboboxContent alignOffset={-28} className="w-60">
        <ComboboxEmpty>No timezones found.</ComboboxEmpty>
        <ComboboxList>
          {(group) => (
            <ComboboxGroup key={group.value} items={group.items}>
              <ComboboxLabel>{group.value}</ComboboxLabel>
              <ComboboxCollection>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxGroup>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
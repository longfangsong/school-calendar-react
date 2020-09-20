# school-calendar-react
A pretty calender for react

This is the React version of the calendar component in [SHUHelper](https://github.com/shuosc/shuhelper-frontend)

## How to use

Just run
```shell script
yarn add school-calendar-react
```
or
```shell script
npm install school-calendar-react
```
in your React project.

And you can use the `Calendar` component in your code:

```tsx
let [date, setDate] = useState(new Date());
<Calendar date={date}                   // the date you want to be displayed
          events={getEvents}            // (date: Date) => Array<Dot> | string, if the return value is a string, it'll be displayed below the date
                                        // `Dot` is interface { color: string }, it'll be displayed as a dot below the date
          onSelect={setDate}            // (date: Date) => void, callback when a date is selected, 
          style={{borderRadius: 4}}
          className: {"theme--light"}   // classNames, for themes, "theme--light" is the default value, can also use "theme--dark"
                                        // if "theme--light" or "theme--dark" class is set in the parent or ancestor component, it will also take effect
/>
```

## Demo

Clone this repo and run
```shell script
yarn && yarn dev
```
for a demo.
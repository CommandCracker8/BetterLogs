# LogsPlus
A module to help you log better in your Javascript and TypeScript projects.

### Installing the module
 Run `npm install logsplus` in your chosen command prompt.

### Importing the module

To import the module in Javascript:
```javascript
const Logger = require('logsplus')
```

And in TypeScript:
```typescript
import Logger from 'logsplus'
```
### Using the module
```javascript
// To do a general log
Logger.log("This is a normal log!")

// To send an info log
Logger.info("This is an informational log.")

// To send a warning
Logger.warn("This is a warning.")

// To send an error
Logger.error("This is an error, you should check this out!")
```
The same goes for TypeScript, remember to replace "Logger" with whatever you initialised the module with.
<br />
You can also make the default console use this module so you don't have to import the module in every file:

```javascript
console = Logger.linkConsole(console)
```
Note: This line of code only needs to go in your main file, because the console object syncs between files.
<br />
And then it's as simple as doing what you done before, just with the default console instead!

```javascript
// To do a general log
console.log("This is a normal log!")

// To send an info log
console.info("This is an informational log.")

// To send a warning
console.warn("This is a warning.")

// To send an error
console.error("This is an error, you should check this out!")
```

Also, to get any of the original console functions, just do, for example, `console.default.log`!

### Support & Feature Requests
This package is looking for feedback and ideas to help cover more use cases. If you have any ideas feel free to share them within the "suggestions" channel in the [Commandcracker8's Development](https://discord.gg/BynpBR4NAe) Discord server. You can also use the [Issues Page](https://github.com/CommandCracker8/LogsPlus/issues) of the [Github](https://github.com/) repo for this package.
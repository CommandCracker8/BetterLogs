# BetterLogs
A module to help you log better in your Javascript and TypeScript projects.

### Importing the module

To import the module in Javascript:
```javascript
const Logger = require('betterlogs')
```

And in TypeScript:
```typescript
import Logger from 'betterlogs'
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
### Support & Feature Requests
This package is looking for feedback and ideas to help cover more use cases. If you have any ideas feel free to share them within the "suggestions" channel in the [Commandcracker8's Development](https://discord.gg/BynpBR4NAe) Discord server.
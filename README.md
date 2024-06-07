## Node.js `file` command wrapper

This is a simple wrapper to the POSIX `file` command, that returns the MIME for a path.

```js
import { mime } from "file-command";

// image/svg+xml
console.log(await mime("/path/to/android.svg"));
```

# Markdown-IT Alerts

Markdown Alerts plugin to be able to create alert, success and tip messages in your Markdown code.

Compatible with Bootstrap alerts.

### Installation

```bash
npm install markdown-it-alert
```

Use plugin;

```js
import md from "markdown-it";
import alerts from "markdown-it-alert";

md().use(alerts);
```

### Options

You can use any type of alert you want, proposed is to use the same type for everything; `warning`,`error`,`tip`,`success` or keep the type blank for the default styling of a message.

#### Links

Links enables the usage of links within your messages. By default this is turned on but can be disabled by;

```js
md().use(alerts, { links: false });
```

### Syntax

```
::: success
Hello world! [Link](#).
:::
```

Gets converted to:

```html
<div class="alert alert-success" role="alert">
	<p>Hello world! <a href="#" class="alert-link">Link</a>.</p>
</div>
```

### Credits

Credits for (https://github.com/nunof07/markdown-it-alerts) for the original package. Mainly copied and refactored everything in order to get it properly working in Typescript based environments.

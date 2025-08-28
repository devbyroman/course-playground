//Task 1 - 2

/*querySelector/All should be chosen when flexible CSS selectors (classes, attributes, nesting) are needed or when it is necessary to retrieve more than just a unique id; textContent should be used to output user text in order to avoid executing or interpreting HTML and XSS injections; addEventListener allows multiple handlers, delegation, options, and easy removal of a specific listener, while element.onclick supports only one; event.preventDefault() cancels the default behavior (link navigation, form submission) and is needed for custom logic before or instead of the default action.

When to use querySelector/All
Choose querySelector/All when the selection requires CSS selectors: by class (.btn), attribute ([data-role=“nav”]), nesting (form.login input[name=“email”]), pseudo-classes, etc.; getElementById only works with a unique id and does not cover such cases.

An example of a selector that cannot be reached via getElementById: ‘ul#menu > li.active a[href^=“/docs”]’ — selects links in active menu items with a specific path prefix; this requires full expressiveness of CSS selectors.

textContent vs innerHTML
textContent inserts text as-is, without parsing HTML, which prevents injections and accidental script execution; innerHTML parses the string as HTML and can open up opportunities for XSS if unverified user data gets into it.

In most UI scenarios, user-provided content should be displayed as safe text, so textContent is the safe default; innerHTML should only be used for inserting*/


//Task 3
/*onclick vs addEventListener
element.onclick stores only one listener: assigning a new one will overwrite the previous one; addEventListener allows you to attach multiple handlers to the same event for a single element.

Removing a listener: for onclick, it is enough to reset the property (element.onclick = null), but it is impossible to have several at the same time; for addEventListener, use removeEventListener with the same callback signature, which provides precise control over the lifecycle of handlers.

Flexibility of addEventListener: supports capture/bubble phases, parameters (once, passive, capture), delegation via bubbling, and same-type multiple listeners, making it a basic tool for complex interfaces.*/

//Task 4

/*Що робить preventDefault
event.preventDefault() скасовує стандартну дію браузера (наприклад, перехід за посиланням, відправлення форми), дозволяючи вам виконати власну логіку перед нею або замість неї; це корисно для навігації SPA або вбудованих підтверджень.

Приклади: натискання на посилання спочатку відкриває модальне підтвердження — якщо користувач погоджується, перехід виконується вручну; відправлення форми блокується для перевірки на стороні клієнта, і тільки після успішної перевірки дані надсилаються програмно або розмітка оновлюється без перезавантаження.*/
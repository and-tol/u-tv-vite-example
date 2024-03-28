# npx eslint "src/**/*.{ts,tsx}"


"group-properties": {
    "properties": [
      // Свойства для внешнего вида элемента
      "color",
      "background-color",
      "font-family",
      "font-size",
      "font-weight",
      "font-style",
      "text-align",
      "text-decoration",
      "text-overflow",
      "text-transform",
      "white-space",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "border",
      "border-radius",
      "border-style",
      "border-width",
      "border-color",
      "border-image",
      "box-shadow",
      "transition",
      "animation",

      // Свойства для расположения элемента
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "margin",
      "padding",
      "z-index",

      // Свойства для поведения элемента
      "display",
      "flex-direction",
      "align-items",
      "justify-content",
      "flex-wrap",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "order",
      "float",
      "clear",
      "overflow",
      "visibility",
      "height",
      "width",
      "min-width",
      "min-height",
      "max-width",
      "max-height",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "cursor",
      "user-select",
      "pointer-events",
      "transform",
      "transform-origin",
      "perspective",
      "perspective-origin",
      "backface-visibility",
      "transform-style",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-play-state",
      "animation-fill-mode",
      "animation-name",
    ],
,
		"grouping-type": "variable"

Если вам нужно временно отменить правило ESLint для конкретного участка кода, вы можете использовать комментарии. Вот как это можно сделать:

Отключение для одной строки:

javascript
Copy code
// eslint-disable-next-line no-unused-vars
const unusedVariable = 'example';
В этом случае правило no-unused-vars будет отключено только для следующей строки.

Отключение для нескольких строк:

javascript
Copy code
/* eslint-disable no-unused-vars */
const unusedVariable1 = 'example1';
const unusedVariable2 = 'example2';
// ...
/* eslint-enable no-unused-vars */
Здесь все строки между комментариями eslint-disable и eslint-enable будут исключены из проверки правила no-unused-vars.

Отключение для всего файла:

В самом начале файла вы можете добавить комментарий:

javascript
Copy code
/* eslint-disable */
// Весь код файла будет исключен из проверки ESLint
Или вы можете использовать следующий комментарий в верхней части файла:

javascript
Copy code
/* eslint-disable file-name */
// Весь код файла будет исключен из проверки правила 'file-name'
Замените file-name на конкретное правило, которое вы хотите отключить.

stylelint
{
	"extends": [
		"stylelint-config-standard-scss"
	],
	"plugins": [
		"stylelint-scss"
	],
	"rules": {
		"selector-class-pattern": null,
		"max-line-length": [
			120,
			{
				"severity": "warning"
			}
		],
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"scss/at-rule-no-unknown": [
			"error"
		],
		"scss/selector-no-duplicate-properties": [
			"error"
		]
	}
}

Среда выполнения happy-dom и jsdom - это обе библиотеки для JavaScript, которые обеспечивают виртуальный DOM для тестирования React. Однако между ними есть некоторые ключевые отличия:

Предсказуемое поведение DOM: happy-dom предоставляет упрощенную модель DOM, которая не зависит от браузера. Это делает поведение DOM более предсказуемым в тестах. jsdom же предоставляет полную модель DOM, которая соответствует спецификации DOM браузера. Это может привести к непредсказуемому поведению в тестах, если тесты не учитывают все тонкости реализации DOM браузера.
Улучшенная читаемость тестов: Код тестов, использующих happy-dom, становится более читаемым, так как он не зависит от деталей реализации DOM браузера. Тесты, использующие jsdom, могут быть более сложными для чтения, так как они зависят от деталей реализации DOM браузера.
Улучшенная воспроизводимость тестов: Тесты, использующие happy-dom, становятся более воспроизводимыми, так как они не зависят от конкретного браузера или версии браузера. Тесты, использующие jsdom, могут быть менее воспроизводимыми, так как они зависят от конкретного браузера или версии браузера.
На основании этих различий можно сделать вывод, что среда выполнения happy-dom является лучшим выбором для тестирования React-компонентов, которые должны быть стабильными и воспроизводимыми. jsdom может быть более подходящим выбором для тестирования React-компонентов, которые должны соответствовать спецификации DOM браузера.

Вот несколько конкретных примеров того, как happy-dom может обеспечить более предсказуемое поведение DOM в тестах:

happy-dom не поддерживает некоторые свойства DOM, которые могут быть несовместимыми с другими браузерами. Это позволяет избежать ошибок в тестах, которые зависят от этих свойств.
happy-dom предоставляет более упрощенную модель событий DOM, чем jsdom. Это упрощает работу с событиями в тестах, так как не нужно учитывать все тонкости реализации событий браузера.
В целом, среда выполнения happy-dom является более мощным и гибким инструментом для тестирования React-компонентов.

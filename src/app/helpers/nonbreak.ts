const patterns: { pattern: RegExp, replaceWith: string }[] = [{
  pattern: /(?<!&nbsp;) —/g,
  replaceWith: "&nbsp;—"
}, {
  pattern: /(?<!ALL&nbsp;)ALL /g,
  replaceWith: "ALL&nbsp;"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Pro/g,
  replaceWith: "Tinkoff&nbsp;Pro"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Shop/g,
  replaceWith: "Tinkoff&nbsp;Shop"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Premium/g,
  replaceWith: "Tinkoff&nbsp;Premium"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Private/g,
  replaceWith: "Tinkoff&nbsp;Private"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Black/g,
  replaceWith: "Tinkoff&nbsp;Black"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff ID/g,
  replaceWith: "Tinkoff&nbsp;ID"
}, {
  pattern: /(?<!Tinkoff&nbsp;)Tinkoff Pay/g,
  replaceWith: "Tinkoff&nbsp;Pay"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Платинум/g,
  replaceWith: "Тинькофф&nbsp;Платинум"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Сторис/g,
  replaceWith: "Тинькофф&nbsp;Сторис"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Страхование/g,
  replaceWith: "Тинькофф&nbsp;Страхование"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Бизнес/g,
  replaceWith: "Тинькофф&nbsp;Бизнес"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Путешествия/g,
  replaceWith: "Тинькофф&nbsp;Путешествия"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Квест/g,
  replaceWith: "Тинькофф&nbsp;Квест"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Банк/g,
  replaceWith: "Тинькофф&nbsp;Банк"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Мобайл/g,
  replaceWith: "Тинькофф&nbsp;Мобайл"
}, {
  pattern: /(?<!Тинькофф&nbsp;)Тинькофф Инвестиции/g,
  replaceWith: "Тинькофф&nbsp;Инвестиции"
}, {
  pattern: /(?<!&nbsp;) →/g,
  replaceWith: "&nbsp;→"
}, {
  pattern: /(?<!&nbsp;) ₽/g,
  replaceWith: "&nbsp;₽"
}, {
  pattern: /(?<!&nbsp;) рублей/g,
  replaceWith: "&nbsp;рублей"
}, {
  pattern: /(?<!&nbsp;) €/g,
  replaceWith: "&nbsp;€"
}, {
  pattern: /(?<!&nbsp;) ¥/g,
  replaceWith: "&nbsp;¥"
}, {
  pattern: /(?<!&nbsp;) 000/g,
  replaceWith: "&nbsp;000"
}, {
  pattern: /(?<!&nbsp;) тыс/g,
  replaceWith: "&nbsp;тыс"
}, {
  pattern: /(?<!&nbsp;) млн/g,
  replaceWith: "&nbsp;млн"
}, {
  pattern: /(?<!&nbsp;) млрд/g,
  replaceWith: "&nbsp;млрд"
}, {
  pattern: /(?<!&nbsp;) год/g,
  replaceWith: "&nbsp;год"
}, {
  pattern: /(?<!&nbsp;)( бы)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: "&nbsp;бы"
}, {
  pattern: /(?<!&nbsp;)( ли)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: "&nbsp;ли"
}, {
  pattern: /(?<!&nbsp;)( же)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: "&nbsp;же"
}, {
  pattern: /(?<!\u2011)-/g,
  replaceWith: "‑"
}, {
  pattern: /(?<!\S)(?!бы|ли|же)([а-яА-ЯёЁ0-9a-zA-Z]{1,2})\s/g,
  replaceWith: "$1&nbsp;"
}, {
  pattern: /(?<!&nbsp;) \$/g,
  replaceWith: "&nbsp;$"
}, {
  pattern: /(?<!&nbsp;|\d) (?=\d+%)/g,
  replaceWith: "&nbsp;"
}, {
  pattern: /(?<!\S)([А-ЯЁ])\.(?!&nbsp;) /g,
  replaceWith: "$1.&nbsp;"
}]

export const nonbreak = (text: string): string => {
  const t = text.split(/([.*?])/);
  return t.forEach(( (e, r) => {
    e.startsWith("{{") || (t[r] = patterns.reduce(((e: any, t: any) => {
      const r = t.pattern, n = t.replaceWith;
      return e.replace(r, n)
    }
    ), e))
  }
  )), t.join("")
}

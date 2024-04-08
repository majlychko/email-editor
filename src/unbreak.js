
Vk = [{
  pattern: /(?<!\u00A0) —/g,
  replaceWith: " —"
}, {
  pattern: /(?<!\u2060)—(?!\u2060)/g,
  replaceWith: "⁠—⁠"
}, {
  pattern: /(?<!ALL\u00A0)ALL /g,
  replaceWith: "ALL "
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Pro/g,
  replaceWith: "Tinkoff Pro"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Shop/g,
  replaceWith: "Tinkoff Shop"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Premium/g,
  replaceWith: "Tinkoff Premium"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Private/g,
  replaceWith: "Tinkoff Private"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Black/g,
  replaceWith: "Tinkoff Black"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff ID/g,
  replaceWith: "Tinkoff ID"
}, {
  pattern: /(?<!Tinkoff\u00A0)Tinkoff Pay/g,
  replaceWith: "Tinkoff Pay"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Платинум/g,
  replaceWith: "Тинькофф Платинум"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Сторис/g,
  replaceWith: "Тинькофф Сторис"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Страхование/g,
  replaceWith: "Тинькофф Страхование"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Бизнес/g,
  replaceWith: "Тинькофф Бизнес"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Путешествия/g,
  replaceWith: "Тинькофф Путешествия"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Квест/g,
  replaceWith: "Тинькофф Квест"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Банк/g,
  replaceWith: "Тинькофф Банк"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Мобайл/g,
  replaceWith: "Тинькофф Мобайл"
}, {
  pattern: /(?<!Тинькофф\u00A0)Тинькофф Инвестиции/g,
  replaceWith: "Тинькофф Инвестиции"
}, {
  pattern: /(?<!\u00A0) →/g,
  replaceWith: " →"
}, {
  pattern: /(?<!\u00A0) ₽/g,
  replaceWith: " ₽"
}, {
  pattern: /(?<!\u00A0) рублей/g,
  replaceWith: " рублей"
}, {
  pattern: /(?<!\u00A0) €/g,
  replaceWith: " €"
}, {
  pattern: /(?<!\u00A0) ¥/g,
  replaceWith: " ¥"
}, {
  pattern: /(?<!\u00A0) 000/g,
  replaceWith: " 000"
}, {
  pattern: /(?<!\u00A0) тыс/g,
  replaceWith: " тыс"
}, {
  pattern: /(?<!\u00A0) млн/g,
  replaceWith: " млн"
}, {
  pattern: /(?<!\u00A0) млрд/g,
  replaceWith: " млрд"
}, {
  pattern: /(?<!\u00A0) год/g,
  replaceWith: " год"
}, {
  pattern: /(?<!\u00A0)( бы)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: " бы"
}, {
  pattern: /(?<!\u00A0)( ли)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: " ли"
}, {
  pattern: /(?<!\u00A0)( же)(?=\s|\.|,|;|:|\?|!|$)/g,
  replaceWith: " же"
}, {
  pattern: /(?<!\u2011)-/g,
  replaceWith: "‑"
}, {
  pattern: /(?<!\S)(?!бы|ли|же)([а-яА-ЯёЁ0-9a-zA-Z]{1,2})\s/g,
  replaceWith: "$1 "
}, {
  pattern: /(?<!\u00A0) \$/g,
  replaceWith: " $"
}, {
  pattern: /(?<!\u00A0|\d) (?=\d+%)/g,
  replaceWith: " "
}, {
  pattern: /(?<!\S)([А-ЯЁ])\.(?!\u00A0) /g,
  replaceWith: "$1. "
}]
, zk = function(e) {
  var t = e.split(/({{.*?}})/);
  return t.forEach((function(e, r) {
      e.startsWith("{{") || (t[r] = Vk.reduce((function(e, t) {
          var r = t.pattern
            , n = t.replaceWith;
          return e.replace(r, n)
      }
      ), e))
  }
  )),
  t.join("")
}
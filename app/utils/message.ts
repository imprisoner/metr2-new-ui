export const error = {
  required: "Поле обязательно",
  wrongValue: "Неверное значение",
  min: (v: number) => `Минимум ${v} символов`,
  max: (v: number) => `Максимум ${v} символов`,
}
function getIssuer(number) {
  if (/^3[4|7]\d{13}$/.test(number)) return 'AMEX'
  if (/^6011\d{12}$/.test(number)) return 'Discover'
  if (/^5[1-5]\d{14}$/.test(number)) return 'Mastercard'
  if (/^4(\d{12}|\d{15})$/.test(number)) return 'VISA'
  return 'Unknown'
}

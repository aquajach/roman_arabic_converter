export default function romanArabicConvert (arabic) {
  let result = ""
  
  if (arabic === 10) {
    return "X"
  }

  if (arabic >= 5) {
    result += "V"
    arabic -= 5
  }

  if (arabic === 4) {
    return "IV"
  }

  result += "I".repeat(arabic)
  return result
}
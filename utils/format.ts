const maskString = (str: string | undefined, len: number = 6, padLen: number = 6) => {
  if (!str) return ''
  if (str.length <= len * 2) {
    return str
  }

  const maskedPart = ''.padStart(padLen, '*')

  return str.substring(0, len) + maskedPart + str.substring(str.length - len)
}

export const Format = {
  maskString
}

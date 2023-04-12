const encoder = new TextEncoder()
const decoder = new TextDecoder()

// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256)
for (let q = 0; q < 256; q++) {
  _utf8len[q] =
    q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1
}
_utf8len[254] = _utf8len[254] = 1 // Invalid sequence start

export function buf2base64(uint8) {
  var bin = ''
  for (var i = 0; i < uint8.length; i++) {
    bin += String.fromCharCode(uint8[i])
  }
  return btoa(bin)
}

export function base642buf(base64) {
  let bin = atob(base64)
  let u8 = new Uint8Array(bin.length)

  for (let i = 0; i < bin.length; i++) {
    u8[i] = bin[i].codePointAt(0)
  }

  return u8
}

// convert string to array (typed, when possible)
export const string2buf = str => {
  return encoder.encode(str)
}

// convert array to string
export const buf2string = (buf, max) => {
  let len = max || buf.length
  return decoder.decode(buf.subarray(0, max))
}

// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
export const utf8border = (buf, max) => {
  max = max || buf.length
  if (max > buf.length) {
    max = buf.length
  }

  // go back from last position, until start of sequence found
  let pos = max - 1
  while (pos >= 0 && (buf[pos] & 0xc0) === 0x80) {
    pos--
  }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) {
    return max
  }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) {
    return max
  }

  return pos + _utf8len[buf[pos]] > max ? pos : max
}

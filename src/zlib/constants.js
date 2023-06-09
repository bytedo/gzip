/* Allowed flush values; see deflate() and inflate() below for details */
export const Z_NO_FLUSH = 0
export const Z_PARTIAL_FLUSH = 1
export const Z_SYNC_FLUSH = 2
export const Z_FULL_FLUSH = 3
export const Z_FINISH = 4
export const Z_BLOCK = 5
export const Z_TREES = 6

/* Return codes for the compression/decompression functions. Negative values
 * are errors positive values are used for special but normal events.
 */
export const Z_OK = 0
export const Z_STREAM_END = 1
export const Z_NEED_DICT = 2
export const Z_ERRNO = -1
export const Z_STREAM_ERROR = -2
export const Z_DATA_ERROR = -3
export const Z_MEM_ERROR = -4
export const Z_BUF_ERROR = -5
//Z_VERSION_ERROR = -6

/* compression levels */
export const Z_NO_COMPRESSION = 0
export const Z_BEST_SPEED = 1
export const Z_BEST_COMPRESSION = 9
export const Z_DEFAULT_COMPRESSION = -1

export const Z_FILTERED = 1
export const Z_HUFFMAN_ONLY = 2
export const Z_RLE = 3
export const Z_FIXED = 4
export const Z_DEFAULT_STRATEGY = 0

/* Possible values of the data_type field (though see inflate()) */
export const Z_BINARY = 0
export const Z_TEXT = 1
//Z_ASCII =                1 // = Z_TEXT (deprecated)
export const Z_UNKNOWN = 2

/* The deflate compression method */
export const Z_DEFLATED = 8
//Z_NULL =                 null // Use -1 or null inline, depending on var type

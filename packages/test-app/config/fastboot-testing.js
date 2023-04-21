/* global ReadableStream, WritableStream, TransformStream */
module.exports = {
  buildSandboxGlobals(defaultGlobals) {
    console.log(require('node-fetch'), fetch);
    return Object.assign({}, defaultGlobals, {
      AbortController,
      fetch: require('node-fetch'),
      ReadableStream:
        typeof ReadableStream !== 'undefined' ? ReadableStream : require('node:stream/web').ReadableStream,
      WritableStream:
        typeof WritableStream !== 'undefined' ? WritableStream : require('node:stream/web').WritableStream,
      TransformStream:
        typeof TransformStream !== 'undefined' ? TransformStream : require('node:stream/web').TransformStream,
      Headers: typeof Headers !== 'undefined' ? Headers : undefined,
    });
  },
};

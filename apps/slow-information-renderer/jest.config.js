module.exports = {
  name: 'slow-information-renderer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/slow-information-renderer/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

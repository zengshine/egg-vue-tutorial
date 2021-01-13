module.exports = {
  ci: {
    collect: {
      // 静态资源目录
      // staticDistDir: './public',
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'egg started on http://127.0.0.1:7001',
      url: [ 'http://localhost:7001' ],
      // 测量过程运行次数
      numberOfRuns: 2,
      settings: {
        chromeFlags: '--no-sandbox'
      }
    },

    assert: {
      assertions: {
        'categories:performance': [ 'warn', { minScore: 50 }],
        'categories:accessibility': [ 'error', { minScore: 50 }]
      }
    },

    upload: {
      target: 'temporary-public-storage'
    }
  }
}
;

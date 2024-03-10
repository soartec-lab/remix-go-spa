import { defineConfig } from 'orval'

export default defineConfig({
  remixSpa: {
    input: {
      target: '../../../openapi/merged/openapi/openapi.yaml',
    },
    output: {
      mode: 'tags-split',
      target: 'app/repositories/client',
      schemas: 'app/repositories/client/models',
      // NOTE: ローカル開発環境で`mock`サーバーを起動しているときは`baseUrl`を変更する
      baseUrl: 'http://localhost:8081',
      client: 'swr',
      prettier: true,
      clean: true,
      mock: {
        type: 'msw',
        delay: 0,
      },
    }
  },
})

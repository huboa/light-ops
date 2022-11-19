import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import styleImport,{AntdResolve} from "vite-plugin-style-import"

//  npm install vite-plugin-style-import@1.4.1 -D 旧版本
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
      react(),
      styleImport({resolves: [
          AntdResolve()
        ],
      })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})

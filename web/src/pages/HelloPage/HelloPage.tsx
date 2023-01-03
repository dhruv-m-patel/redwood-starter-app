import { MetaTags } from '@redwoodjs/web'

import MainLayout from 'src/layouts/MainLayout'

export default () => (
  <MainLayout>
    <MetaTags title="Hello World!" description="Hello World Page" />
    <header>
      <h1>Hello World!</h1>
    </header>
    <main>
      <section>
        <p>This is a test page built with Redwood.js app</p>
      </section>
    </main>
    <footer>
      <h5>This app was generated with redwood.js</h5>
    </footer>
  </MainLayout>
)

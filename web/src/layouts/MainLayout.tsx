export default ({ children }: { children: React.ReactNode }) => (
  <div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
              html, body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                background-color: #E2E8F0;
                height: 100vh;
                text-align: center;
                padding: 1rem;
                margin: 0 auto;
              }
              html * {
                box-sizing: border-box;
              }
              main {
                display: flex;
                align-items: center;
                padding: 1rem;
                margin: 0 auto;
              }
              section {
                background-color: white;
                border-radius: 0.25rem;
                width: 32rem;
                padding: 1rem;
                margin: 0 auto;
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
              }
              h1 {
                font-size: 2rem;
                margin: 0;
                font-weight: 500;
                line-height: 1;
                color: #2D3748;
              }
            `,
      }}
    />
    {children}
  </div>
)

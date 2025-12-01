import { headers } from 'next/headers'
import MobileNav from '../components/MobileNav'
import DesktopNav from '../components/DesktopNav'

export default async function HomePage() {
  const headersList = await headers();
  const viewportWidth = headersList.get('sec-ch-viewport-width');

  const width = viewportWidth ? parseInt(viewportWidth, 10) : null
  

  const isMobile = width !== null && width < 768

  return (
    <main style={{ padding: 40 }}>
      <h2>SSR Responsive Rendering Demo</h2>
      <p>Header viewport-width: {viewportWidth ?? 'none'}</p>

      <div style={{ marginTop: 20 }}>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>


      <p style={{ marginTop: 40 }}>
        Reload once or twice — Client Hints start working only from the
        second request.
      </p>
    </main>
  )
}

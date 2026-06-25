import { Link } from 'react-router-dom'
import { useClient } from '../client/ClientContext.jsx'

/* Link koji radi i na pravom sajtu i na demo stranici.

   Na pravom sajtu  → react-router <Link to={to}>  (npr. "/#kontakt", "/cijenik")
   Na /demo/<slug>  → obični anchor na istoj stranici, jer demo je jedna stranica:
       "/"          → "#home"
       "/cijenik"   → "#cijene"   (sekcija cijena na istoj stranici)
       "/#kontakt"  → "#kontakt"
*/
export default function SmartLink({ to, children, ...rest }) {
  const { isDemo } = useClient()

  if (isDemo) {
    let href = to
    if (to === '/') href = '#home'
    else if (to === '/cijenik') href = '#cijene'
    else if (to.startsWith('/#')) href = to.slice(1)
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}

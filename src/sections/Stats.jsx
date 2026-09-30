import Counter from '../components/Counter.jsx'
import { useClient } from '../client/ClientContext.jsx'

export default function Stats() {
  const c = useClient()
  // Iste brojke kao u heroju, "O nama" i Google znački — nikad kontradikcija na istoj stranici.
  const stats = [
    [c.patients, '+', 'Zadovoljnih pacijenata'],
    [c.years, '+', 'Godina iskustva'],
    [98, '%', 'Stopa uspješnosti'],
    [c.reviewCount, '+', 'Google recenzija'],
  ]

  return (
    <section className="stats">
      <div className="stats-g">
        {stats.map(([n, s, l]) => (
          <div className="stat" key={l}>
            <div className="stat-n">
              <Counter to={n} suffix={s} />
            </div>
            <div className="stat-l">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

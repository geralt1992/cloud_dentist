import Counter from '../components/Counter.jsx'

const STATS = [
  [2500, '+', 'Zadovoljnih pacijenata'],
  [15, '+', 'Godina iskustva'],
  [98, '%', 'Stopa uspješnosti'],
  [12, '', 'Stručnjaka u timu'],
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-g">
        {STATS.map(([n, s, l], i) => (
          <div className="stat" key={i}>
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

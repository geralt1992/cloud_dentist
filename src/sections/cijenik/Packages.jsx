import { Link } from 'react-router-dom'
import FadeUp from '../../components/FadeUp.jsx'
import { PACKAGES, COMPARE_ROWS } from '../../data/pricing.js'

export default function Packages() {
  return (
    <div className="price-section">
      <FadeUp>
        <div className="ps-header">
          <div>
            <h2 className="ps-title">Godišnji paketi skrbi</h2>
            <p className="ps-sub">
              Izaberite paket koji odgovara vašim potrebama i uštedite na dugoročnoj skrbi.
            </p>
          </div>
          <div className="ps-badge">✦ Preporučeno</div>
        </div>
      </FadeUp>

      <div className="pkg-grid">
        {PACKAGES.map((p, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <div className={`pkg-card${p.feat ? ' feat' : ''}`}>
              {p.feat && <div className="pkg-badge">Najpopularnije</div>}
              <div className="pkg-icon">{p.icon}</div>
              <div className="pkg-name">{p.nm}</div>
              <div className="pkg-title">{p.title}</div>
              <div className="pkg-price">{p.price}</div>
              <div className="pkg-period">{p.period}</div>
              <div className="pkg-divider" />
              <ul className="pkg-features">
                {p.fs.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <Link to="/#kontakt" className={`btn btn-sm ${p.feat ? 'btn-gold' : 'btn-outline'}`}>
                Rezerviraj →
              </Link>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Comparison table */}
      <FadeUp delay={0.2} style={{ marginTop: 60 }}>
        <div className="lbl">
          <span>Usporedba paketa</span>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Što je uključeno</th>
                <th>Starter</th>
                <th className="feat-col">Premium</th>
                <th>Elite</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map(([feat, ...vals], i) => (
                <tr key={i}>
                  <td>{feat}</td>
                  {vals.map((v, j) => (
                    <td key={j} className={j === 1 ? 'feat-col' : ''}>
                      {v === '✓' ? (
                        <span className="chk">✓</span>
                      ) : v === '—' ? (
                        <span className="cross">—</span>
                      ) : (
                        <span className="val">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeUp>
    </div>
  )
}

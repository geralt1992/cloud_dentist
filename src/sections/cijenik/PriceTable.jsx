import FadeUp from '../../components/FadeUp.jsx'

function PriceRow({ name, desc, duration, price, from, note, tag }) {
  return (
    <tr className="price-row">
      <td>
        <div className="pr-name">
          {name}
          {tag === 'popular' && <span className="pr-tag popular">Popularno</span>}
          {tag === 'new' && <span className="pr-tag new">Novo</span>}
        </div>
        {desc && <div className="pr-desc">{desc}</div>}
      </td>
      <td className="pr-duration">{duration}</td>
      <td className="pr-price">
        {from && <span className="pr-price-from">od</span>}
        <span className="pr-price-val">{price}</span>
        {note && <span className="pr-price-note">{note}</span>}
      </td>
    </tr>
  )
}

export default function PriceTable({ title, subtitle, badge, rows }) {
  return (
    <div className="price-section">
      <FadeUp>
        <div className="ps-header">
          <div>
            <h2 className="ps-title">{title}</h2>
            {subtitle && <p className="ps-sub">{subtitle}</p>}
          </div>
          {badge && <div className="ps-badge">✦ {badge}</div>}
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <table className="price-table">
          <thead>
            <tr>
              <th>Usluga</th>
              <th>Trajanje</th>
              <th style={{ textAlign: 'right' }}>Cijena</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <PriceRow key={i} {...r} />
            ))}
          </tbody>
        </table>
      </FadeUp>
    </div>
  )
}

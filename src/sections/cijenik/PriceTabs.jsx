import { TABS } from '../../data/pricing.js'

export default function PriceTabs({ active, onChange }) {
  return (
    <div className="tabs-wrap">
      <div className="tabs">
        {TABS.map((t, i) => (
          <button key={i} className={`tab${active === i ? ' active' : ''}`} onClick={() => onChange(i)}>
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

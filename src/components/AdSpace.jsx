// Reusable advertisement slot.
//
// Placeholder by default. To go live with Google AdSense:
//   1. Add your AdSense script to index.html (see the commented block there).
//   2. Set `slot` to your ad unit ID and pass `live`.
//   3. Uncomment the <ins className="adsbygoogle"> block below.
export default function AdSpace({ label = 'Advertisement', slot, format = 'auto', live = false }) {
  if (live && slot) {
    return (
      <div className="ad-slot" aria-label="Advertisement">
        {/*
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2509020334755517"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        */}
      </div>
    )
  }

  return (
    <div className="ad-slot ad-slot--placeholder" aria-hidden="true">
      <span className="ad-slot__tag">Ad</span>
      <span className="ad-slot__text">{label} space available</span>
    </div>
  )
}

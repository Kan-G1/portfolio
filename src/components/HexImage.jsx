import { profile } from "../data.js";

/**
 * Hexagon portrait with an animated gradient border + glow.
 * Shows `profile.photo` when set; otherwise a monogram placeholder.
 */
export default function HexImage() {
  return (
    <div className="relative animate-float">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-accent/25 blur-3xl" />
      {/* animated gradient border */}
      <div className="hex-clip hex-sheen h-[300px] w-[264px] p-[3px] xl:h-[340px] xl:w-[300px]">
        {/* inner image / placeholder */}
        <div className="hex-clip relative h-full w-full overflow-hidden bg-ink-800">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover"
              loading="eager"
            />
          ) : (
            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink-800 to-ink-900">
              <span className="font-display text-6xl font-bold text-white/25">KG</span>
              <span className="absolute bottom-8 text-[10px] uppercase tracking-[0.25em] text-white/30">
                your photo
              </span>
            </div>
          )}
          {/* subtle inner sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-white/5" />
        </div>
      </div>
    </div>
  );
}

"use client";

import { AREA_PINS, MAP_CENTER } from "@/lib/site";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const TILE_SIZE = 256;
const ZOOM = 12;
const WIDTH = 920;
const HEIGHT = 420;

function mercatorX(lon: number, z: number) {
  return ((lon + 180) / 360) * 2 ** z;
}

function mercatorY(lat: number, z: number) {
  const s = Math.sin((lat * Math.PI) / 180);
  return (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * 2 ** z;
}

export function CoverageMap() {
  const t = useTranslations("zone");
  const centerX = mercatorX(MAP_CENTER.lon, ZOOM);
  const centerY = mercatorY(MAP_CENTER.lat, ZOOM);
  const originPxX = centerX * TILE_SIZE - WIDTH / 2;
  const originPxY = centerY * TILE_SIZE - HEIGHT / 2;
  const minTileX = Math.floor(originPxX / TILE_SIZE);
  const maxTileX = Math.floor((originPxX + WIDTH) / TILE_SIZE);
  const minTileY = Math.floor(originPxY / TILE_SIZE);
  const maxTileY = Math.floor((originPxY + HEIGHT) / TILE_SIZE);

  const tiles: { x: number; y: number; left: number; top: number }[] = [];
  for (let x = minTileX; x <= maxTileX; x += 1) {
    for (let y = minTileY; y <= maxTileY; y += 1) {
      tiles.push({
        x,
        y,
        left: x * TILE_SIZE - originPxX,
        top: y * TILE_SIZE - originPxY,
      });
    }
  }

  return (
    <div className="relative h-[320px] w-full overflow-hidden bg-sand sm:h-[420px]">
      <div className="osm-soft pointer-events-none absolute inset-0">
        {tiles.map((tile) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${tile.x}-${tile.y}`}
            alt=""
            draggable={false}
            className="absolute max-w-none"
            style={{
              width: TILE_SIZE,
              height: TILE_SIZE,
              left: tile.left,
              top: tile.top,
            }}
            src={`https://tile.openstreetmap.org/${ZOOM}/${tile.x}/${tile.y}.png`}
          />
        ))}
      </div>
      {AREA_PINS.map((pin) => {
        const x = mercatorX(pin.lon, ZOOM) * TILE_SIZE - originPxX;
        const y = mercatorY(pin.lat, ZOOM) * TILE_SIZE - originPxY;
        return (
          <span
            key={pin.key}
            className="absolute z-10 -translate-x-1/2 -translate-y-full text-coral drop-shadow-[0_2px_6px_rgba(30,42,74,0.35)]"
            style={{ left: x, top: y }}
            title={t(`areas.${pin.key}`)}
          >
            <MapPin size={22} fill="currentColor" strokeWidth={1.6} />
          </span>
        );
      })}
    </div>
  );
}
